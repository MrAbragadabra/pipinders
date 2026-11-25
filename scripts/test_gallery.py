import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from PIL import Image

from build_gallery import run
from verify_site import verify


class GalleryTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.addCleanup(self.temp.cleanup)
        for name in ('index.html', 'gallery.html', 'privacy.html', 'consent.html', 'CNAME'):
            (self.root / name).touch()
        for season in ('season-1', 'season-2'):
            (self.root / 'gallery' / season).mkdir(parents=True)

    def photo(self, name, season='season-1', fmt='PNG'):
        path = self.root / 'gallery' / season / name
        Image.new('RGB', (32, 20), 'green').save(path, format=fmt)
        return path

    def manifest(self):
        return json.loads((self.root / 'gallery/manifest.json').read_text(encoding='utf-8'))

    def test_encoded_names_and_natural_sort(self):
        for name in ('10.png', '2.png', '1.png', 'Зимняя база #1%.png'):
            self.photo(name)
        self.photo('02.jpg', 'season-2', 'JPEG')
        run(self.root)
        verify(self.root)
        result = self.manifest()['seasons']
        self.assertEqual([x['src'].split('/')[-1] for x in result['season-1'][:3]], ['1.png', '2.png', '10.png'])
        self.assertIn('%20', result['season-1'][3]['src'])
        self.assertIn('%23', result['season-1'][3]['src'])
        self.assertIn('%25', result['season-1'][3]['src'])
        self.assertEqual(len(result['season-2']), 1)

    def test_delete_and_rebuild(self):
        image = self.photo('1.png')
        run(self.root)
        image.unlink()
        run(self.root)
        verify(self.root)
        self.assertEqual(self.manifest()['seasons']['season-1'], [])
        self.assertEqual(list((self.root / 'assets/images/gallery-thumbs/season-1').glob('*.webp')), [])

    def test_mismatched_format(self):
        self.photo('bad.png', fmt='JPEG')
        with self.assertRaises(SystemExit):
            run(self.root)

    def test_corrupt_file(self):
        (self.root / 'gallery/season-1/bad.png').write_bytes(b'<html>not a photo</html>')
        with self.assertRaises(SystemExit):
            run(self.root)

    def test_pixel_limit(self):
        self.photo('1.png')
        with patch('build_gallery.MAX_PIXELS', 100):
            with self.assertRaises(SystemExit):
                run(self.root)

    def test_traversal_and_external_url(self):
        self.photo('1.png')
        run(self.root)
        original = self.manifest()
        for bad in ('./gallery/season-1/%2e%2e%2fsecret.png', 'https://example.com/a.png', './gallery/season-1/%5csecret.png'):
            with self.subTest(bad=bad):
                original['seasons']['season-1'][0]['src'] = bad
                (self.root / 'gallery/manifest.json').write_text(json.dumps(original), encoding='utf-8')
                with self.assertRaises(SystemExit):
                    verify(self.root)

    def test_missing_thumbnail(self):
        self.photo('1.png')
        run(self.root)
        thumb = next((self.root / 'assets/images/gallery-thumbs/season-1').glob('*.webp'))
        thumb.unlink()
        with self.assertRaises(SystemExit):
            verify(self.root)

    def test_symlink_not_collected(self):
        image = self.photo('1.png')
        (image.parent / '2.png').symlink_to(image)
        run(self.root)
        verify(self.root)
        self.assertEqual(len(self.manifest()['seasons']['season-1']), 1)


if __name__ == '__main__':
    unittest.main()
