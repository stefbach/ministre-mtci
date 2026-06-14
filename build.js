#!/usr/bin/env node
/* Precompiles the .jsx sources into plain JS in build/ for the production
   index.html (no in-browser Babel, instant start, offline-capable).
   Usage:  npm i @babel/standalone   then   node build.js
   Edit the .jsx files (and main.jsx), then re-run this. */
const fs = require('fs');
let Babel;
try { Babel = require('@babel/standalone'); }
catch (e) { console.error('Missing @babel/standalone. Run:  npm i @babel/standalone'); process.exit(1); }

const jobs = [
  ['animations.jsx',    'build/animations.js'],
  ['film-lib.jsx',      'build/film-lib.js'],
  ['film-content.jsx',  'build/film-content.js'],
  ['film-content2.jsx', 'build/film-content2.js'],
  ['main.jsx',          'build/main.js'],
];
fs.mkdirSync('build', { recursive: true });
for (const [src, out] of jobs) {
  const code = Babel.transform(fs.readFileSync(src, 'utf8'), { presets: ['react'], filename: src, compact: false }).code;
  fs.writeFileSync(out, code);
  console.log('compiled', out);
}
console.log('Done. Production entry: index.html');
