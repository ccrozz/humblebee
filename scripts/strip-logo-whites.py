#!/usr/bin/env python3
"""One-pass removal of pale whites / creams / flat grays inside the logo PNG.

Keeps saturated gold (honey / plates) and dark illustration inks.
Run from repo root: python3 scripts/strip-logo-whites.py
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image


def golden_honey(r: int, g: int, b: int) -> bool:
    """Saturated honey / plate gold — not pale cream type."""
    return r > 220 and g > 178 and b < 208 and (r - b) > 38


def pale_interior(r: int, g: int, b: int) -> bool:
    """Whites, off-whites, pale creams, light flat grays (incl. checker remnants)."""
    if golden_honey(r, g, b):
        return False
    mx, mn = max(r, g, b), min(r, g, b)
    avg = (r + g + b) / 3
    sp = mx - mn
    if avg < 165:
        return False
    if sp > 78:
        return False
    # bright whites / near-whites
    if avg >= 228 and sp <= 55:
        return True
    # flat light gray / cream (low chroma)
    if avg >= 198 and sp <= 24:
        return True
    # pale tinted highlights (typography sky, rope glare)
    if avg >= 208 and sp <= 38 and mn >= 168:
        return True
    return False


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    path = root / "public" / "humble-bee-logo.png"
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    pix = im.load()
    cleared = 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = pix[x, y]
            if a < 128:
                continue
            if pale_interior(r, g, b):
                pix[x, y] = (r, g, b, 0)
                cleared += 1
    im.save(path, optimize=True)
    print(f"cleared {cleared} pixels -> {path}")


if __name__ == "__main__":
    main()
