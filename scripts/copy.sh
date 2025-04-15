#!/bin/bash
echo "Copying files to dist directory..."

cp package.json dist/package.json
mkdir -p dist/ui
cp lib/styles/* dist/ui

echo "Files copied successfully!"
