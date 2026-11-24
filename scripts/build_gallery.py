#!/usr/bin/env python3
"""PIPINDERS: generate a static season manifest and lightweight WebP thumbnails.

This script runs at deployment time; upload images to gallery/season-1 or season-2.
No human-edited image lists and no network calls are needed.
"""
import argparse
import hashlib
import json
from pathlib import Path
from urllib.parse import quote

from PIL import Image, ImageOps, UnidentifiedImageError

SEASONS = ("season-1", "season-2")
EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}
MAX_PIXELS = 70_000_000
Image.MAX_IMAGE_PIXELS = MAX_PIXELS


def natural_key(path: Path):
    import re
    return [int(bit) if bit.isdecimal() else bit.casefold() for bit in re.split(r"(\d+)", path.name)]


def run(root: Path):
    root = root.resolve()
    gallery_dir = root / "gallery"
    thumbs_root = root / "assets" / "images" / "gallery-thumbs"
    result = {"version": 1, "seasons": {}}
    for season in SEASONS:
        directory = gallery_dir / season
        directory.mkdir(parents=True, exist_ok=True)
        target_dir = thumbs_root / season
        target_dir.mkdir(parents=True, exist_ok=True)
        # The deployment is created fresh, but clean even if run repeatedly locally.
        for old in target_dir.glob("*.webp"):
            old.unlink()
        found = []
        for file in sorted(directory.iterdir(), key=natural_key):
            if not file.is_file() or file.is_symlink() or file.suffix.lower() not in EXTENSIONS or file.name.startswith("."):
                continue
            try:
                with Image.open(file) as source:
                    source.load()
                    if source.width * source.height > MAX_PIXELS:
                        raise ValueError("image too large")
                    img = ImageOps.exif_transpose(source)
                    width, height = img.size
                    img.thumbnail((1100, 825), Image.Resampling.LANCZOS)
                    if img.mode not in ("RGB", "RGBA"):
                        img = img.convert("RGBA" if "A" in img.getbands() else "RGB")
                    if img.mode == "RGBA":
                        # Compositing once avoids white/black surprises with transparency.
                        canvas = Image.new("RGB", img.size, "#102019")
                        canvas.paste(img, mask=img.getchannel("A"))
                        img = canvas
                    thumb_name = hashlib.sha256(file.name.encode("utf-8") + file.read_bytes()).hexdigest()[:18] + ".webp"
                    img.save(target_dir / thumb_name, "WEBP", quality=82, method=6)
            except (UnidentifiedImageError, OSError, ValueError, Image.DecompressionBombError) as exc:
                raise SystemExit(f"Invalid screenshot: {file.relative_to(root)} ({type(exc).__name__}: {exc})") from exc
            found.append({
                "src": "./gallery/" + season + "/" + quote(file.name),
                "thumb": "./assets/images/gallery-thumbs/" + season + "/" + thumb_name,
                "width": width,
                "height": height,
            })
        result["seasons"][season] = found
        print(f"{season}: {len(found)} screenshots")
    gallery_dir.mkdir(exist_ok=True)
    (gallery_dir / "manifest.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Wrote gallery/manifest.json")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parent.parent)
    run(parser.parse_args().root)
