# 💻 Projeto de Testes Automatizados com Playwright e Postman

Este repositório contém uma suíte de testes automatizados para a aplicação web **Sauce Demo** (UI) utilizando **Playwright** e para a API **Restful-Booker** utilizando **Postman/Newman**. O projeto visa garantir a qualidade e a funcionalidade dos principais fluxos de ambas as aplicações, com integração contínua via GitHub Actions e relatórios detalhados com Allure Report.

---

## 🧱 Estrutura do Projeto

```
.
├── .github/                 # Configurações de CI/CD (GitHub Actions)
├── documentacao/            # Documentação do projeto (planos de teste, casos de teste, relatórios de bugs, melhorias)
├── playwright_web/          # Projeto de automação Web com Playwright (contém os testes e configurações)
├── postman_api/             # Projeto de automação de API com Postman/Newman (contém coleções, ambientes e scripts)
├── .gitignore               # Arquivos e diretórios ignorados pelo Git
└── README.md                # Este arquivo
```

---

## 🎯 Práticas e Padrões Chave

### 📌 Automação de Testes

- **Playwright:** Utilizado para automação de testes de UI na aplicação Sauce Demo, cobrindo fluxos de autenticação, gestão de produtos, carrinho e checkout.
- **Postman/Newman:** Empregado para automação de testes de API na Restful-Booker, incluindo CRUD de reservas, autenticação e validações de endpoints. As coleções e ambientes do Postman estão disponíveis em formato JSON na pasta `postman_api/`.

### 📌 Testes Manuais

- **Performance e Segurança:** Testes básicos de performance e segurança foram executados manualmente para a API Restful-Booker, focando em tempo de resposta e validação de acesso sem token.
- **Responsividade:** Testes de responsividade para a UI do Sauce Demo foram realizados manualmente, utilizando ferramentas de desenvolvedor do navegador.
- **Acessibilidade:** Devido a restrições de tempo, os testes de acessibilidade não foram realizados neste projeto.

---

## 🚀 Executando os Testes Localmente

### Testes Web (Playwright)

Para executar os testes Playwright, siga os passos abaixo:

```bash
# Navegue para o diretório do Playwright
cd playwright_web

# Instale as dependências
npm install

# Execute todos os testes em modo headless
npx playwright test

# Rode testes separados
exemplo: npx playwright test tests/login.spec.ts (nome do arquivo)

# Execute os testes em modo UI (com navegador visível)
npx playwright test --ui

# Gere e abra o relatório Allure
npx playwright test --reporter=line,allure-playwright
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

### Testes de API (Postman/Newman)

Para executar os testes de API, você tem duas opções:

#### 1. Via Postman App (Recomendado para execução manual e desenvolvimento)

1.  **Importe as coleções e ambientes:** Na pasta `postman_api/`, você encontrará os arquivos `restful-booker.postman_collection.json` e `restful-booker.postman_environment.json`. Importe-os para o seu aplicativo Postman.
2.  **Execute os testes:** Selecione a coleção `Restful-Booker` no Postman, escolha o ambiente `Restful-Booker` e execute os testes diretamente pela interface do Postman. Você pode usar o Collection Runner para uma execução mais organizada.

#### 2. Via Newman (Linha de Comando e CI/CD)

Para execução via linha de comando (útil para integração CI/CD), siga os passos:

```bash
# Navegue para o diretório do Postman
cd postman_api

# Instale as dependências (Newman e Allure Reporter)
npm install

# Execute a coleção Postman e gere o relatório Allure
npx newman run restful-booker.postman_collection.json -e restful-booker.postman_environment.json -r cli,htmlextra,allure --reporter-allure-export allure-results

# Abra o relatório Allure
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## 🌐 Integração Contínua (CI/CD) com GitHub Actions e Allure Report

Este projeto utiliza **GitHub Actions** para automatizar a execução dos testes de UI e API. A cada `push` na branch `main`, os workflows de CI/CD são acionados, executando os testes Playwright e Postman.

Os resultados dos testes são processados pelo **Allure Report**, que gera um relatório HTML detalhado. Este relatório é então publicado automaticamente via **GitHub Pages**, permitindo uma visualização fácil e centralizada dos resultados de ambas as suítes de testes (UI e API) em um único HTML.

Você pode acessar o relatório Allure mais recente através do link:
[https://matheussantozqa.github.io/Be_Talent_TestTec_Web-API/](https://matheussantozqa.github.io/Be_Talent_TestTec_Web-API/)

---

## 🔧 Ferramentas Utilizadas

- **Playwright:** Framework para automação de testes End-to-End (E2E) para aplicações web.
- **Postman:** Ferramenta para testes e desenvolvimento de APIs.
- **Newman:** Executor de linha de comando para coleções Postman.
- **Allure Report:** Framework para geração de relatórios de testes interativos e detalhados.
- **GitHub Actions:** Plataforma de CI/CD para automação de workflows.
- **GitHub Pages:** Serviço de hospedagem para sites estáticos, utilizado para publicar os relatórios Allure.
- **Markdown:** Linguagem de marcação para documentação.

---

## 📌 Notas

- A documentação completa, incluindo casos de teste detalhados e relatórios de bugs com evidências, pode ser encontrada na pasta `documentacao/`.
- Os seletores e elementos de página para os testes Playwright são organizados de forma a facilitar a manutenção.
- As coleções e ambientes do Postman estão em formato JSON na pasta `postman_api/` para fácil acesso e importação.
