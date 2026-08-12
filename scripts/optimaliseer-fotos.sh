#!/usr/bin/env bash
#
# Zet elke foto uit fotos-bron/ om naar WebP op drie schermbreedtes, plus een
# piepklein voorbeeldje dat als onscherpe achtergrond dient zolang de echte
# foto nog onderweg is. Schrijft src/photoAssets.ts, waar Photo.tsx uit leest.
#
# De bron-JPEG's staan in fotos-bron/ en niet in public/: daardoor komen ze
# wel in git terecht (als invoer voor dit script) maar niet in de build. In
# public/photos staan alleen de WebP-varianten die de site echt uitlevert.
# De onbewerkte originelen staan in fotos-origineel/ en zitten niet in git.
#
# Draaien na het toevoegen of vervangen van een foto:
#
#   ./scripts/optimaliseer-fotos.sh
#
# Nodig: cwebp (brew install webp) en sips (zit in macOS).

set -euo pipefail

cd "$(dirname "$0")/.."

BRON_DIR="fotos-bron"
PHOTOS_DIR="public/photos"
BREEDTES=(480 800 1200 1440)
KWALITEIT=78
# Breder dan dit en de base64-tekst weegt meer dan wat hij bespaart.
LQIP_BREEDTE=20

command -v cwebp >/dev/null || { echo "cwebp ontbreekt: brew install webp"; exit 1; }

manifest="src/photoAssets.ts"
tmp="$(mktemp)"

for bron in "$BRON_DIR"/*.jpg; do
  naam="$(basename "$bron" .jpg)"
  breedte_origineel="$(sips -g pixelWidth "$bron" | awk '/pixelWidth/{print $2}')"
  echo "→ $naam (${breedte_origineel}px)"

  beschikbaar=()
  for w in "${BREEDTES[@]}"; do
    # Nooit opschalen: dat kost bytes en levert geen scherpte op.
    if [ "$w" -gt "$breedte_origineel" ]; then continue; fi
    cwebp -quiet -q "$KWALITEIT" -resize "$w" 0 "$bron" -o "$PHOTOS_DIR/$naam-$w.webp"
    beschikbaar+=("$w")
  done

  # Een foto smaller dan de kleinste stap krijgt toch één variant, anders
  # heeft hij straks een lege srcset.
  if [ "${#beschikbaar[@]}" -eq 0 ]; then
    cwebp -quiet -q "$KWALITEIT" "$bron" -o "$PHOTOS_DIR/$naam-$breedte_origineel.webp"
    beschikbaar+=("$breedte_origineel")
  fi

  lqip="$(mktemp).webp"
  cwebp -quiet -q 40 -resize "$LQIP_BREEDTE" 0 "$bron" -o "$lqip"

  printf "  '%s': { widths: [%s], blur: '%s' },\n" \
    "$naam" \
    "$(IFS=,; echo "${beschikbaar[*]}")" \
    "data:image/webp;base64,$(base64 -i "$lqip")" >> "$tmp"
  rm -f "$lqip"
done

{
  echo "/**"
  echo " * Welke breedtes er van elke foto bestaan, en een uitgesmeerd voorbeeldje"
  echo " * van ${LQIP_BREEDTE}px breed. Photo.tsx bouwt hier de srcset uit op en zet het"
  echo " * voorbeeldje als achtergrond, zodat je tijdens het laden de kleuren van de"
  echo " * foto ziet in plaats van een grijs vlak."
  echo " *"
  echo " * Gegenereerd door scripts/optimaliseer-fotos.sh — niet met de hand aanpassen."
  echo " */"
  echo "export interface PhotoAsset {"
  echo "  widths: number[];"
  echo "  blur: string;"
  echo "}"
  echo ""
  echo "export const photoAssets: Record<string, PhotoAsset> = {"
  sort "$tmp"
  echo "};"
} > "$manifest"

rm -f "$tmp"
echo "Klaar. $manifest bijgewerkt ($(du -ch "$PHOTOS_DIR"/*.webp | tail -1 | cut -f1) aan WebP)."
