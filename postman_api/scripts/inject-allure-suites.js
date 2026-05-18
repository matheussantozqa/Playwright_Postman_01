#!/usr/bin/env node
/**
 * Pos-processa os arquivos *-result.json gerados pelo newman-reporter-allure
 * e injeta labels Allure para que o report fique completo:
 *   - parentSuite: nome do folder (1 folder = 1 suite no widget Suites)
 *   - epic:        "Restful Booker API" (top-level no Behaviors)
 *   - feature:     "Autenticacao" ou "Reservas" (nivel intermediario)
 *   - story:       nome do folder (nivel granular - aparece em Features by Stories)
 *   - severity:    "critical" para auth, "normal" para CRUD
 *   - owner:       "Matheus Santos"
 *   - tag:         "api", "smoke"
 *
 * MODO DINAMICO: le a collection e mapeia request -> folder automaticamente.
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

const collection = JSON.parse(fs.readFileSync(COLLECTION_FILE, 'utf8'));
const REQUEST_MAP = {};

function walk(items, folderName) {
  if (!Array.isArray(items)) return;
  items.forEach(function(item) {
    if (item.item) walk(item.item, item.name);
    else if (item.request) REQUEST_MAP[item.name] = folderName || collection.info.name;
  });
}
walk(collection.item, null);

// Heuristica simples para feature e severity baseado no nome do folder
function inferFeature(folderName) {
  var s = folderName.toLowerCase();
  if (s.indexOf('autentica') >= 0 || s.indexOf('auth') >= 0) return 'Autenticacao';
  return 'Reservas';
}
function inferSeverity(folderName) {
  var s = folderName.toLowerCase();
  if (s.indexOf('autentica') >= 0) return 'critical';
  if (s.indexOf('criac') >= 0 || s.indexOf('exclus') >= 0) return 'critical';
  return 'normal';
}

const files = fs.readdirSync(RESULTS_DIR).filter(function(f) {
  return f.endsWith('-result.json');
});

if (files.length === 0) {
  console.warn('[inject-allure-suites] Nenhum *-result.json em ' + RESULTS_DIR);
  process.exit(0);
}

var updated = 0;
var skipped = 0;

files.forEach(function(file) {
  const filePath = path.join(RESULTS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const folderName = REQUEST_MAP[data.name];

  if (!folderName) {
    console.warn('[inject-allure-suites] Sem mapeamento para "' + data.name + '" - pulando.');
    skipped++;
    return;
  }

  const feature = inferFeature(folderName);
  const severity = inferSeverity(folderName);

  // Limpa labels antigas dessas chaves
  data.labels = (data.labels || []).filter(function(l) {
    return ['parentSuite', 'suite', 'subSuite', 'epic', 'feature', 'story',
            'severity', 'owner', 'tag'].indexOf(l.name) === -1;
  });

  data.labels.push({ name: 'parentSuite', value: folderName });
  data.labels.push({ name: 'epic',        value: 'Restful Booker API' });
  data.labels.push({ name: 'feature',     value: feature });
  data.labels.push({ name: 'story',       value: folderName });
  data.labels.push({ name: 'severity',    value: severity });
  data.labels.push({ name: 'owner',       value: 'Matheus Santos' });
  data.labels.push({ name: 'tag',         value: 'api' });
  data.labels.push({ name: 'tag',         value: 'smoke' });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('[inject-allure-suites] OK ' + data.name +
              '  ->  ' + folderName + ' [' + feature + '/' + severity + ']');
  updated++;
});

console.log('\n[inject-allure-suites] Atualizados: ' + updated + ' | Pulados: ' + skipped);
