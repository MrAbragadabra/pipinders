import argparse
import json
from pathlib import Path
from urllib.parse import unquote, urlsplit

SEASONS = ("season-1", "season-2")


def verify(root):
    root = root.resolve()
    for name in ("index.html", "gallery.html", "privacy.html", "consent.html", "gallery/manifest.json", "CNAME"):
        if not (root / name).is_file():
            raise SystemExit(f"Missing file: {name}")
    manifest = json.loads((root / "gallery/manifest.json").read_text(encoding="utf-8"))
    if manifest.get("version") != 1:
        raise SystemExit("Unsupported gallery manifest version")
    for season in SEASONS:
        for item in manifest["seasons"][season]:
            for key, folder in (("src", f"gallery/{season}"), ("thumb", f"assets/images/gallery-thumbs/{season}")):
                url = urlsplit(item[key])
                prefix = f"./{folder}/"
                if url.scheme or url.netloc or url.query or url.fragment or not url.path.startswith(prefix):
                    raise SystemExit(f"Invalid gallery path: {item[key]}")
                name = unquote(url.path[len(prefix):], errors="strict")
                if not name or name.startswith(".") or any(c in name for c in ("/", "\\", "\x00")):
                    raise SystemExit(f"Invalid gallery filename: {name!r}")
                path = root / folder / name
                if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(root):
                    raise SystemExit(f"Missing or unsafe gallery asset: {path}")
    print("Website and gallery verified")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parent.parent)
    verify(parser.parse_args().root)
