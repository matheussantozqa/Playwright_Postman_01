#!/usr/bin/env node
/**
 * Pos-processa os arquivos *-result.json gerados pelo newman-reporter-allure
 * e injeta a label "suite" para que cada folder da collection aparece como uma
 * suite separada na aba "Suites" do Allure report.
 *
 * O newman-reporter-allure@3.x so cria a label "parentSuite" (com o nome da
 * collection) e nao mapeia os folders para "suite" - por isso esse script.
 *
 * Mapeamento: nome do request -> nome da suite (folder).
 * Se voce adicionar/renomear requests, atualize o mapa abaixo.
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
  console.error(`[inject-allure-suites] Diretorio ${RESULTS_DIR} nao existe.`);
  process.exit(1);
}

const files = fs.readdirSync(RESULTS_DIR).filter(f => f.endsWith('-result.json'));

if (files.length === 0) {
  console.warn(`[inject-allure-suites] Nenhum *-result.json encontrado em ${RESULTS_DIR}.`);
  process.exit(0);
}

let updated = 0;
let skipped = 0;

files.forEach(file => {
  const filePath = path.join(RESULTS_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const suite = SUITE_MAP[data.name];

  if (!suite) {
    console.warn(`[inject-allure-suites] Sem mapeamento para "${data.name}" - pulando.`);
    skipped++;
    return;
  }

  data.labels = (data.labels || []).filter(l => l.name !== 'suite');
  data.labels.push({ name: 'suite', value: suite });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`[inject-allure-suites] OK ${data.name}  ->  suite: ${suite}`);
  updated++;
});

console.log(`\n[inject-allure-suites] Atualizados: ${updated} | Pulados: ${skipped}`);
