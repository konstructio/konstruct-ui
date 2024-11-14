import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.resolve(__dirname, './package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const distDir = path.resolve(__dirname, '../dist');

const exports = {
  './package.json': './package.json',
  '.': {
    import: './dist/index.js',
    default: './dist/index.cjs',
  },
};

function addExports(dir, basePath = '.') {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      addExports(filePath, `${basePath}/${file}`);
    } else {
      const match = file.match(/^(.*)\.(js|cjs)$/);
      if (match) {
        const componentName = match[1];
        exports[`${basePath}/${componentName}`] = {
          import: `./dist/${componentName}.js`,
          default: `./dist/${componentName}.cjs`,
        };
      }
    }
  });
}

addExports(distDir);

packageJson.exports = exports;
fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(packageJson, null, 2),
  'utf-8',
);

console.log('Campo `exports` actualizado en package.json');
