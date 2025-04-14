#!/bin/bash
echo "Copying files to dist directory..."

cp package.json dist/package.json
cp lib/styles/* dist

echo "Files copied successfully!"
