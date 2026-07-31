"""
Convert all PNG/JPG images in storefront/public/images/ to WebP,
then update all references in the source codebase.
"""

import os
import re
from pathlib import Path
from PIL import Image

IMAGES_DIR = Path("storefront/public/images")
SRC_DIRS = [
    Path("storefront/app"),
    Path("storefront/components"),
    Path("storefront/styles"),
]
SRC_EXTS = {".tsx", ".ts", ".jsx", ".js", ".css"}

QUALITY = 85

# ── Collect PNG/JPG images ────────────────────────────────────────────────────

to_convert = [
    f for f in IMAGES_DIR.iterdir()
    if f.suffix.lower() in (".png", ".jpg", ".jpeg")
]

print(f"\n── CONVERTING {len(to_convert)} IMAGES TO WEBP ──────────────────")

converted = []  # [(old_name, new_name)]

for src_path in sorted(to_convert):
    dst_path = src_path.with_suffix(".webp")
    try:
        img = Image.open(src_path)
        # Convert RGBA/P to RGBA for webp transparency support, RGB otherwise
        if img.mode in ("RGBA", "LA", "P"):
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")
        img.save(dst_path, "WEBP", quality=QUALITY, method=6)
        os.remove(src_path)
        converted.append((src_path.name, dst_path.name))
        print(f"  ✓  {src_path.name}  →  {dst_path.name}")
    except Exception as e:
        print(f"  ✗  {src_path.name}: {e}")

# ── Update references in source files ────────────────────────────────────────

if not converted:
    print("\nNo conversions done.")
    raise SystemExit(0)

print(f"\n── UPDATING REFERENCES IN SOURCE FILES ─────────────────")

def walk_src_files():
    for d in SRC_DIRS:
        for path in d.rglob("*"):
            if path.is_file() and path.suffix in SRC_EXTS:
                yield path

for file_path in walk_src_files():
    text = file_path.read_text(encoding="utf-8")
    updated = text
    for old_name, new_name in converted:
        updated = updated.replace(old_name, new_name)
    if updated != text:
        file_path.write_text(updated, encoding="utf-8")
        print(f"  ✓  {file_path.relative_to('storefront')}")

print(f"\n── DONE ─────────────────────────────────────────────────")
print(f"  Converted: {len(converted)} images")
print(f"  Quality:   {QUALITY}")
