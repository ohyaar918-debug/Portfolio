"""
fix_paths.py — make your portfolio images work on the internet.

Your script.js points to files like  C:/Users/dawoo/Downloads/Portfolio/...  which only exist on YOUR computer.
This script copies each of those files into an  images/  folder next to script.js and rewrites script.js to use
the short relative path (images/xxx.png). Run it ON YOUR PC, in the website folder:

    python fix_paths.py

A backup is saved as script.backup.js. Files it cannot find are listed and left unchanged.
"""
import re, shutil, sys
from pathlib import Path

root = Path(__file__).resolve().parent
js = root / 'script.js'
text = js.read_text(encoding='utf-8')
out = root / 'images'; out.mkdir(exist_ok=True)

found = sorted(set(re.findall(r"C:/Users/[^'\"\r\n]+?\.(?:jpe?g|png|webp|gif|svg|pdf)", text, flags=re.I)), key=len, reverse=True)
slug = lambda s: re.sub(r'[^a-z0-9._-]+', '-', s.lower()).strip('-')
used, mapping, missing = set(), {}, []

for src in found:
    p = Path(src)
    name = slug(p.name)
    if name in used:                       # same file name from another folder -> prefix with its folder
        name = slug(p.parent.name) + '-' + name
    n, stem, ext = 2, Path(name).stem, Path(name).suffix
    while name in used:
        name = f'{stem}-{n}{ext}'; n += 1
    if not p.exists():
        missing.append(src); continue
    used.add(name); shutil.copy2(p, out / name); mapping[src] = f'images/{name}'

if mapping:
    shutil.copy2(js, root / 'script.backup.js')
    for src, new in mapping.items():       # longest paths first, so no partial overwrites
        text = text.replace(src, new)
    js.write_text(text, encoding='utf-8')

print(f'Copied and rewrote {len(mapping)} image(s) into {out}')
if missing:
    print(f'\n{len(missing)} file(s) NOT found on this computer (left unchanged):')
    for m in missing: print('  ', m)
sys.exit(1 if missing else 0)
