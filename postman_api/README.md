# API Tests - restful-booker (Newman + Allure)

Automacao dos testes de API da collection `restful-booker.postman_collection.json` rodando via [Newman](https://github.com/postmanlabs/newman) com report em [Allure](https://docs.qameta.io/allure/).

## Estrutura

```
postman_api/
├── restful-booker.postman_collection.json   # Collection com tests pm.* embutidos
├── restful-booker.postman_environment.json  # Environment com baseUrl, user, pass
├── package.json                             # Scripts npm + dependencias
├── .gitignore
└── README.md
```

## Pre-requisitos

- Node.js >= 18
- Java >= 11 (necessario para o Allure CLI)

## Rodando localmente

Instala as dependencias:

```bash
cd postman_api
npm install
npm install -g allure-commandline --save-dev
```

Roda a suite e gera o report:

```bash
npm test                  # roda Newman e produz allure-results/
npm run report:generate   # gera allure-report/ a partir dos results
npm run report:open       # abre o report no navegador
```

Limpar artefatos:

```bash
npm run clean
```

## CI/CD - GitHub Actions

O workflow `.github/workflows/api-tests.yml` (na raiz do repo) e disparado em:

- `push` para `main`/`master` quando arquivos em `postman_api/**` mudam
- Manualmente via `workflow_dispatch` na aba Actions

Etapas do workflow:

1. Faz checkout do codigo
2. Instala Node 20, Java 17 e dependencias do projeto
3. Restaura o historico anterior do Allure (da branch `gh-pages`) para gerar graficos de tendencia
4. Roda a collection com `npm run test:ci`
5. Gera o report Allure
6. Faz upload do report como artifact (retencao de 30 dias)
7. **Publica o report HTML na branch `gh-pages`, dentro de `/api`**

### Habilitar GitHub Pages

Apos o primeiro run do workflow:

1. No repositorio, vai em **Settings → Pages**
2. Em **Source**, escolhe **Deploy from a branch**
3. Em **Branch**, escolhe `gh-pages` e pasta `/ (root)`
4. Salva

A URL do report sera:

```
https://<usuario>.github.io/<nome-do-repo>/api/
```

### Convivencia com testes Playwright

O workflow usa `destination_dir: api` ao publicar na `gh-pages`, ou seja, o report fica em `/api`. Quando voce adicionar o workflow do Playwright, basta usar `destination_dir: web` (com `keep_files: true`) e os dois reports vao coexistir na mesma branch:

```
gh-pages/
├── api/    ← report do Newman
└── web/    ← report do Playwright (futuro)
```

## Cobertura dos testes

| Request                       | Validacoes                                                         |
| ----------------------------- | ------------------------------------------------------------------ |
| POST /auth                    | Status 200, presenca do `token`, tempo < 5s, salva token na collection |
| POST /booking                 | Status 200, schema, dados refletem payload, salva `bookingid`      |
| GET /booking/{{bookingid}}    | Status 200, content-type, dados conferem com criacao               |
| PUT /booking/{{bookingid}}    | Status 200, atualizacao refletida no body                          |
| DELETE /booking/{{bookingid}} | Status 201 (padrao do restful-booker), tempo < 5s                  |

