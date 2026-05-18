# Relatório de Melhorias — Sauce Demo | Restful-Booker API

---

## 1. Informações do Projeto

| Campo | Detalhes |
| --- | --- |
| Nome do Projeto | Be Talent Test Técnico — Sauce Demo & Restful-Booker |
| Versão da Aplicação | 1.0 (Baseado nos reports) |
| Data do Relatório | 18/05/2026 |
| Autor | Manus AI (Baseado nos dados de Matheus Santos) |

---

## 2. Resumo

Este relatório apresenta as principais melhorias identificadas durante o processo de QA das aplicações **Sauce Demo** (Web UI) e **Restful-Booker** (API), com foco em problemas críticos e soluções propostas para otimizar a qualidade e a experiência do usuário. Os dados foram coletados do repositório GitHub do usuário e atualizados em 18/05/2026.

---

## 3. Principais Defeitos Identificados

Abaixo estão os defeitos mais relevantes encontrados:

### BUG-UI-12 — Finalizar compra com carrinho vazio

**Descrição:** A aplicação permite avançar para o checkout e finalizar a compra mesmo com o carrinho vazio.

| Campo | Valor |
| --- | --- |
| Severidade | 🟡 Média |
| Prioridade | 🟡 Média |

---

### BUG_RESP-03 — Responsividade no detalhe do produto

**Descrição:** Bug de UI identificado durante a execução do teste de responsividade ao validar o comportamento da aplicação ao utilizar a aba de detalhes de produto em diversos dispositivos: web - mobile e tablet. A Hero Section é cropada na lateral direita em dispositivos tablet e mobile ao scrollar.

| Campo | Valor |
| --- | --- |
| Severidade | ⚪ Baixa |
| Prioridade | ⚪ Baixa |

---

### BUG_ST-05 — Exposição de Header X-Powered-By na resposta da API

**Descrição:** Bug de Segurança identificado durante a execução do teste ST-05, ao validar a exposição de dados sensíveis nos headers das respostas da Restful Booker API. O problema foi identificado em ambas as requisições testadas: GET /booking e GET /booking/{id}. A API expõe o header "X-Powered-By: Express", revelando a stack tecnológica (Node.js/Express).

| Campo | Valor |
| --- | --- |
| Severidade | 🟡 Média |
| Prioridade | 🔴 Alta |

---

## 4. Melhorias Propostas

As seguintes melhorias são propostas para resolver os problemas e aprimorar as aplicações:

### Melhoria 1 — Ícone de visualização de senha (Sauce Demo)

**Descrição:** Adicionar ícone de olho para visualizar a senha durante o login.

**Impacto:** Melhora a usabilidade e evita erros de digitação do usuário.

**Prioridade:** 🟡 Média

---

### Melhoria 2 — Validação de campos obrigatórios na API (Restful-Booker)

**Descrição:** Implementar validação de campos obrigatórios na API Restful-Booker para evitar erros 500 em payloads incompletos.

**Impacto:** Aumenta a robustez da API e melhora o tratamento de erros.

**Prioridade:** 🔴 Alta

---

### Melhoria 3 — Feedback visual ao adicionar itens ao carrinho (Sauce Demo)

**Descrição:** Adicionar feedback visual (Toast/Alert) ao adicionar itens ao carrinho para confirmar a ação do usuário.

**Impacto:** Melhora a experiência do usuário e a clareza das ações.

**Prioridade:** 🟡 Média

---

## 5. Metodologia e Ferramentas

As seguintes ferramentas e metodologias foram utilizadas no projeto:

- **Automação Web:** Playwright.
- **Automação API:** Postman.
- **CI/CD:** GitHub Actions (para execução automática de testes e geração de reports).
- **Reports:** Allure Report e GitHub Pages (para visualização dos resultados).

---

## 6. Conclusão

A implementação das melhorias propostas é fundamental para garantir a estabilidade e a qualidade das aplicações Sauce Demo e Restful-Booker, resultando em produtos mais robustos e satisfatórios para os usuários. A contínua atenção à automação de testes e à análise de qualidade, como demonstrado neste projeto, é crucial para o sucesso a longo prazo.
