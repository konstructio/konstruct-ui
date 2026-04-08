#!/bin/bash
echo "Copying files to dist directory..."

cp package.json dist/package.json
mkdir -p dist/ui
cp lib/styles/* dist/ui

# Create root-level type declarations that re-export from dist/lib
echo "export * from './lib/index';" > dist/index.d.ts
echo "export * from './lib/icons';" > dist/icons.d.ts

echo "Files copied successfully!"
