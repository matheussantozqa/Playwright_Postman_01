#!/usr/bin/env node
/**
 * Pos-processa *-result.json gerados pelo allure-playwright e injeta:
 *   - parentSuite: nome do arquivo spec (1 spec = 1 suite no widget Suites)
 *   - suite:       nome do test.describe (mantido como sub-agrupamento)
 *   - epic:        "Sauce Demo Web"
 *   - feature:     inferida pelo nome do spec (Login, Filtros, Compra, Navegacao)
 *   - story:       nome do arquivo spec
 *   - severity:    critical para login/compra, normal pro resto
 *   - owner:       "QA Team"
 *   - tag:         "web", "e2e"
 */
const fs = require('fs');
const path = require('path');

const RESULTS_DIR = process.argv[2] || 'allure-results';
if (!fs.existsSync(RESULTS_DIR)) {
  console.error('[inject-allure-suites-web] Diretorio ' + RESULTS_DIR + ' nao existe.');
  process.exit(1);
}

function inferFeature(specName) {
  var s = specName.toLowerCase();
  if (s.indexOf('login') >= 0) return 'Login';
  if (s.indexOf('filtro') >= 0) return 'Filtros';
  if (s.indexOf('compra') >= 0) return 'Fluxo de Compra';
  if (s.indexOf('navega') >= 0) return 'Navegacao';
  return 'Outros';
}
function inferSeverity(specName) {
  var s = specName.toLowerCase();
  if (s.indexOf('login') >= 0 || s.indexOf('compra') >= 0) return 'critical';
  return 'normal';
}

const files = fs.readdirSync(RESULTS_DIR).filter(function(f) {
  return f.endsWith('-result.json');
});

if (files.length === 0) {
  console.warn('[inject-allure-suites-web] Nenhum *-result.json em ' + RESULTS_DIR);
  process.exit(0);
}

var updated = 0;

files.forEach(function(file) {
  const filePath = path.join(RESULTS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const labels = data.labels || [];

  const specName = (labels.find(function(l) { return l.name === 'suite'; }) || {}).value;
  const describeName = (labels.find(function(l) { return l.name === 'subSuite'; }) || {}).value;

  if (!specName) {
    console.warn('[inject-allure-suites-web] "' + data.name + '" sem label suite - pulando.');
    return;
  }

  const feature = inferFeature(specName);
  const severity = inferSeverity(specName);

  data.labels = labels.filter(function(l) {
    return ['parentSuite', 'suite', 'subSuite', 'epic', 'feature', 'story',
            'severity', 'owner', 'tag'].indexOf(l.name) === -1;
  });

  data.labels.push({ name: 'parentSuite', value: specName });
  if (describeName) data.labels.push({ name: 'suite', value: describeName });
  data.labels.push({ name: 'epic',     value: 'Sauce Demo Web' });
  data.labels.push({ name: 'feature',  value: feature });
  data.labels.push({ name: 'story',    value: specName });
  data.labels.push({ name: 'severity', value: severity });
  data.labels.push({ name: 'owner',    value: 'Matheus Santos' });
  data.labels.push({ name: 'tag',      value: 'web' });
  data.labels.push({ name: 'tag',      value: 'e2e' });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('[inject-allure-suites-web] OK ' + data.name +
              '  ->  ' + specName + ' [' + feature + '/' + severity + ']');
  updated++;
});

console.log('\n[inject-allure-suites-web] Atualizados: ' + updated);
