#!/usr/bin/env node
/**
 * Pos-processa os arquivos *-result.json gerados pelo newman-reporter-allure
 * e PROMOVE cada folder da collection a parentSuite separada no Allure.
 *
 * Antes (padrao do reporter):
 *   parentSuite: "restful-booker" (todos os requests agrupados aqui)
 *
 * Depois (com esse script):
 *   parentSuite = nome do folder (cada request num grupo separado)
 *
 * Se voce adicionar/renomear requests, atualize o SUITE_MAP abaixo.
 */
const fs = require('fs');
const path = require('path');

const SUITE_MAP = {
  'POST - Autenticacao Basica': '1. Authentication',
  'POST - Criar Reserva': '2. Create Booking',
  'GET - Leitura e Validacao de Reserva': '3. Read Booking',
  'PUT - Atualizacao de Reserva': '4. Update Booking',
  'DELETE - Exclusao de Reserva': '5. Delete Booking',
};

const RESULTS_DIR = process.argv[2] || 'allure-results';

if (!fs.existsSync(RESULTS_DIR)) {
  console.error('[inject-allure-suites] Diretorio ' + RESULTS_DIR + ' nao existe.');
  process.exit(1);
}

const files = fs.readdirSync(RESULTS_DIR).filter(function(f) { return f.endsWith('-result.json'); });

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
