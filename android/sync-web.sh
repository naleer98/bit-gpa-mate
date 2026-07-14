#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
WWW_DIR="$ROOT_DIR/android/app/src/main/assets/www"
rm -rf "$WWW_DIR"
mkdir -p "$WWW_DIR/assets/icons"
cp "$ROOT_DIR/index.html" "$ROOT_DIR/styles.css" "$ROOT_DIR/app.js" "$ROOT_DIR/manifest.json" "$ROOT_DIR/service-worker.js" "$WWW_DIR/"
cp "$ROOT_DIR/assets/uom-crest.png" "$ROOT_DIR/assets/bit-uom-logo.png" "$WWW_DIR/assets/"
cp "$ROOT_DIR/assets/icons/"*.png "$WWW_DIR/assets/icons/"
echo "Web files synced to Android assets."
