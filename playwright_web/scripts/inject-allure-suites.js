#!/usr/bin/env node
/**
 * Pos-processa os arquivos *-result.json gerados pelo allure-playwright
 * e PROMOVE cada arquivo spec a parentSuite separada no Allure report.
 *
 * Estrutura padrao do allure-playwright:
 *   parentSuite: "chromium" (nome do project)
 *   suite: "filtro.spec.ts" (arquivo)
 *   subSuite: "Filtros - Sauce Demo" (test.describe)
 *
 * Apos esse script:
 *   parentSuite: "filtro.spec.ts" (arquivo vira top-level)
 *   suite: "Filtros - Sauce Demo" (describe vira suite)
 *
 * Resultado: no widget "SUITES" do Overview e na aba "Suites" do menu
 * lateral, cada arquivo spec aparece como item separado.
 */
const fs = require('fs');
const path = require('path');

const RESULTS_DIR = process.argv[2] || 'allure-results';

if (!fs.existsSync(RESULTS_DIR)) {
  console.error('[inject-allure-suites-web] Diretorio ' + RESULTS_DIR + ' nao existe.');
  process.exit(1);
}

const files = fs.readdirSync(RESULTS_DIR).filter(function(f) {
  return f.endsWith('-result.json');
});

if (files.length === 0) {
  console.warn('[inject-allure-suites-web] Nenhum *-result.json encontrado em ' + RESULTS_DIR + '.');
  process.exit(0);
}

var updated = 0;

files.forEach(function(file) {
  const filePath = path.join(RESULTS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const labels = data.labels || [];

  const suite = (labels.find(function(l) { return l.name === 'suite'; }) || {}).value;
  const subSuite = (labels.find(function(l) { return l.name === 'subSuite'; }) || {}).value;

  if (!suite) {
    console.warn('[inject-allure-suites-web] "' + data.name + '" sem label "suite" - pulando.');
    return;
  }

  // Remove labels antigas de agrupamento
  data.labels = labels.filter(function(l) {
    return l.name !== 'parentSuite' && l.name !== 'suite' && l.name !== 'subSuite';
  });

  // Promove: suite (arquivo) -> parentSuite, subSuite (describe) -> suite
  data.labels.push({ name: 'parentSuite', value: suite });
  if (subSuite) {
    data.labels.push({ name: 'suite', value: subSuite });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('[inject-allure-suites-web] OK ' + data.name + '  ->  parentSuite: ' + suite);
  updated++;
});

console.log('\n[inject-allure-suites-web] Atualizados: ' + updated);
