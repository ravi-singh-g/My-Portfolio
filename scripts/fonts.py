#!/usr/bin/env python3
"""Download latin-subset woff2 fonts from Google Fonts and emit public/fonts.css."""
import re
import pathlib
import urllib.request

UA = {
    'User-Agent': (
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
        '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    )
}

URL = (
    'https://fonts.googleapis.com/css2?'
    'family=Orbitron:wght@500;700;800&family=Space+Grotesk:wght@400;500;600;700'
    '&display=swap'
)

root = pathlib.Path(__file__).resolve().parent.parent
fonts_dir = root / 'public' / 'fonts'
fonts_dir.mkdir(parents=True, exist_ok=True)

css = urllib.request.urlopen(urllib.request.Request(URL, headers=UA)).read().decode()

blocks = re.findall(r'/\*\s*([a-z-]+)\s*\*/\s*@font-face\s*\{([^}]+)\}', css)
out = []
for subset, body in blocks:
    if subset != 'latin':
        continue
    fam = re.search(r"font-family:\s*'([^']+)'", body).group(1)
    weight = re.search(r'font-weight:\s*(\d+)', body).group(1)
    style = re.search(r'font-style:\s*(\w+)', body).group(1)
    furl = re.search(r'url\((https://[^)]+\.woff2)\)', body)
    if not furl:
        continue
    fname = f'{fam.lower().replace(" ", "")}-{weight}.woff2'
    data = urllib.request.urlopen(urllib.request.Request(furl.group(1), headers=UA)).read()
    (fonts_dir / fname).write_bytes(data)
    out.append(
        f"@font-face {{ font-family: '{fam}'; font-style: {style}; font-weight: {weight}; "
        f"font-display: swap; src: url('/fonts/{fname}') format('woff2'); }}"
    )
    print('saved', fname, len(data), 'bytes')

(root / 'public' / 'fonts.css').write_text('\n'.join(out) + '\n')
print('wrote public/fonts.css with', len(out), 'faces')
