#!/usr/bin/env bash
# ----------------------------------------------------------------------
# convert-images.sh
#
# Genera versiones .webp para todas las imágenes JPG/PNG en _assets/.
# - No sobreescribe si la .webp ya existe y es más reciente.
# - Convierte GIFs a MP4 (H.264) y WebM (VP9) cuando hay ffmpeg.
#
# Requisitos:
#   - cwebp     (libwebp)        para JPG/PNG -> WebP
#   - gif2webp  (libwebp)        para GIF animados -> WebP animado
#   - ffmpeg    (opcional)       para GIF -> MP4 / WebM
#
# Uso:
#   bash tools/convert-images.sh
#   bash tools/convert-images.sh --quality 80
#
# Después: revisa los archivos generados, commit, push.
# ----------------------------------------------------------------------

set -euo pipefail

QUALITY=82
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ASSETS_DIR="${ROOT_DIR}/_assets"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --quality) QUALITY="$2"; shift 2 ;;
    *) echo "Argumento desconocido: $1"; exit 1 ;;
  esac
done

if [[ ! -d "$ASSETS_DIR" ]]; then
  echo "No se encuentra $ASSETS_DIR" >&2
  exit 1
fi

have() { command -v "$1" >/dev/null 2>&1; }

if ! have cwebp; then
  echo "cwebp no encontrado. Instala libwebp (apt: webp, brew: webp)." >&2
  exit 1
fi

count_jpg=0
count_png=0
count_gif=0
count_skipped=0

# JPG / JPEG / PNG -> WebP
while IFS= read -r -d '' src; do
  out="${src%.*}.webp"
  if [[ -f "$out" && "$out" -nt "$src" ]]; then
    ((count_skipped++)) || true
    continue
  fi
  cwebp -quiet -q "$QUALITY" -metadata none "$src" -o "$out"
  ext="${src##*.}"
  case "${ext,,}" in
    jpg|jpeg) ((count_jpg++)) || true ;;
    png)      ((count_png++)) || true ;;
  esac
  printf '  ✓ %s\n' "${out#$ROOT_DIR/}"
done < <(find "$ASSETS_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)

# GIFs animados -> WebP animado (si está gif2webp) y/o MP4/WebM (si está ffmpeg)
while IFS= read -r -d '' gif; do
  base="${gif%.*}"
  if have gif2webp; then
    out="${base}.webp"
    if [[ ! -f "$out" || "$gif" -nt "$out" ]]; then
      gif2webp -quiet -q "$QUALITY" "$gif" -o "$out"
      printf '  ✓ %s\n' "${out#$ROOT_DIR/}"
      ((count_gif++)) || true
    fi
  fi
  if have ffmpeg; then
    mp4="${base}.mp4"
    webm="${base}.webm"
    if [[ ! -f "$mp4" || "$gif" -nt "$mp4" ]]; then
      ffmpeg -hide_banner -loglevel error -y -i "$gif" \
        -movflags +faststart -pix_fmt yuv420p \
        -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
        -an "$mp4"
      printf '  ✓ %s\n' "${mp4#$ROOT_DIR/}"
    fi
    if [[ ! -f "$webm" || "$gif" -nt "$webm" ]]; then
      ffmpeg -hide_banner -loglevel error -y -i "$gif" \
        -c:v libvpx-vp9 -b:v 0 -crf 32 -row-mt 1 -an "$webm"
      printf '  ✓ %s\n' "${webm#$ROOT_DIR/}"
    fi
  fi
done < <(find "$ASSETS_DIR" -type f -iname '*.gif' -print0)

echo
echo "Resumen:"
echo "  JPG -> WebP:     $count_jpg"
echo "  PNG -> WebP:     $count_png"
echo "  GIF -> WebP:     $count_gif"
echo "  Saltados (al día): $count_skipped"
echo
echo "Listo. Revisa con: du -sh _assets && git status"
