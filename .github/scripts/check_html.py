#!/usr/bin/env python3
"""
Validador ligero para el HTML generado por Franklin.jl.
Busca problemas estructurales comunes:
  - Cierres duplicados de </body> o </html>
  - Referencias rotas a assets locales (/css/, /assets/, /libs/)
"""
from __future__ import annotations

import os
import re
import sys
import urllib.parse
from pathlib import Path


def find_problems(site_dir: Path) -> list[str]:
    issues: list[str] = []
    ref_re = re.compile(r'(?:href|src)="(/[^"]+)"')

    for html in site_dir.rglob("*.html"):
        rel = html.relative_to(site_dir)
        text = html.read_text(encoding="utf-8", errors="ignore")

        # Cierres duplicados
        if text.count("</body>") > 1:
            issues.append(f"{rel}: tiene {text.count('</body>')} cierres de </body>")
        if text.count("</html>") > 1:
            issues.append(f"{rel}: tiene {text.count('</html>')} cierres de </html>")

        # Referencias rotas a assets locales
        for ref in ref_re.findall(text):
            if ref.startswith(("http://", "https://", "//", "mailto:", "#")):
                continue
            # Quitar fragmentos y querystrings
            clean = ref.split("#", 1)[0].split("?", 1)[0]
            if not clean:
                continue
            # Decodificar URL encoding (%20 -> espacio, etc.)
            decoded = urllib.parse.unquote(clean)
            target = (site_dir / decoded.lstrip("/")).resolve()
            # Si parece directorio, comprobar index.html
            if not target.exists():
                if not (target / "index.html").exists():
                    issues.append(f"{rel}: referencia rota -> {ref}")
            elif target.is_dir() and not (target / "index.html").exists():
                issues.append(f"{rel}: directorio sin index -> {ref}")

    return issues


def main() -> int:
    if len(sys.argv) < 2:
        print("uso: check_html.py <directorio __site>", file=sys.stderr)
        return 2
    site_dir = Path(sys.argv[1]).resolve()
    if not site_dir.is_dir():
        print(f"no existe {site_dir}", file=sys.stderr)
        return 2

    issues = find_problems(site_dir)
    if issues:
        print(f"Encontrados {len(issues)} problemas:")
        for issue in issues[:50]:
            print(f"  - {issue}")
        if len(issues) > 50:
            print(f"  ... y {len(issues) - 50} más")
        return 1

    print(f"OK: {site_dir} validado sin problemas estructurales.")
    return 0


if __name__ == "__main__":
    sys.exit(main())