#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'allure');
const DST = path.join(__dirname, '..', process.argv[2] || 'allure-results');

if (!fs.existsSync(DST)) fs.mkdirSync(DST, { recursive: true });

['categories.json', 'executor.json', 'environment.properties'].forEach(function(f) {
  const src = path.join(SRC, f);
  const dst = path.join(DST, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    console.log('[copy-allure-meta] OK ' + f);
  } else {
    console.warn('[copy-allure-meta] ' + f + ' nao encontrado em ' + SRC);
  }
});
