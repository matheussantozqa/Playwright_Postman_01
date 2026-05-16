#!/usr/bin/env node
/**
 * Pos-processa os arquivos *-result.json gerados pelo newman-reporter-allure
 * e PROMOVE cada folder da collection a parentSuite separada no Allure.
 *
 * MODO DINAMICO: le a collection JSON e constroi o mapeamento
 * "nome do request" -> "nome do folder" automaticamente.
 *
 * Se voce renomear folders ou requests na collection, NAO precisa atualizar
 * este script - basta rodar de novo que ele descobre sozinho.
 */
const fs = require('fs');
const path = require('path');

const RESULTS_DIR = process.argv[2] || 'allure-results';
const COLLECTION_FILE = process.argv[3] ||
  path.join(__dirname, '..', 'restful-booker.postman_collection.json');

if (!fs.existsSync(COLLECTION_FILE)) {
  console.error('[inject-allure-suites] Collection nao encontrada: ' + COLLECTION_FILE);
  process.exit(1);
}

if (!fs.existsSync(RESULTS_DIR)) {
  console.error('[inject-allure-suites] Diretorio ' + RESULTS_DIR + ' nao existe.');
  process.exit(1);
}

// Constroi mapeamento dinamico lendo a collection
const collection = JSON.parse(fs.readFileSync(COLLECTION_FILE, 'utf8'));
const SUITE_MAP = {};

function walk(items, folderName) {
  if (!Array.isArray(items)) return;
  items.forEach(function(item) {
    if (item.item) {
      // E um folder - desce mantendo o nome desse folder como suite
      walk(item.item, item.name);
    } else if (item.request) {
      // E um request - mapeia para o folder pai
      SUITE_MAP[item.name] = folderName || collection.info.name;
    }
  });
}
walk(collection.item, null);

console.log('[inject-allure-suites] Mapeamento descoberto a partir da collection:');
Object.keys(SUITE_MAP).forEach(function(req) {
  console.log('  ' + req + '  ->  ' + SUITE_MAP[req]);
});
console.log('');

const files = fs.readdirSync(RESULTS_DIR).filter(function(f) {
  return f.endsWith('-result.json');
});

if (files.length === 0) {
  console.warn('[inject-allure-suites] Nenhum *-result.json encontrado em ' + RESULTS_DIR + '.');
  process.exit(0);
}

var updated = 0;
var skipped = 0;

files.forEach(function(file) {
  const filePath = path.join(RESULTS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const suiteName = SUITE_MAP[data.name];

  if (!suiteName) {
    console.warn('[inject-allure-suites] Sem mapeamento para "' + data.name + '" - pulando.');
    skipped++;
    return;
  }

  data.labels = (data.labels || []).filter(function(l) {
    return l.name !== 'parentSuite' && l.name !== 'suite' && l.name !== 'subSuite';
  });
  data.labels.push({ name: 'parentSuite', value: suiteName });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('[inject-allure-suites] OK ' + data.name + '  ->  parentSuite: ' + suiteName);
  updated++;
});

console.log('\n[inject-allure-suites] Atualizados: ' + updated + ' | Pulados: ' + skipped);
