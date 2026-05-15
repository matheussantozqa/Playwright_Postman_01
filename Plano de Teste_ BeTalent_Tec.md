# Plano de Teste: BeTalent_Tec (Sauce Demo & Restful-Booker)

## 1. Objetivo
Assegurar que os fluxos principais da plataforma de e-commerce **Sauce Demo** (UI) e do sistema de reservas **Restful-Booker** (API) funcionem perfeitamente, cobrindo desde a autenticação até a finalização de compras e gestão de reservas. Este plano guia todas as atividades de teste de QA, abrangendo requisitos obrigatórios (Nível 1) e diferenciais (Nível 2), utilizando Playwright para automação UI e Postman para testes de API.

## 2. Versão

| Atributo | Detalhe |
| :--- | :--- |
| **Projeto** | Be Talent Test Técnico - Sauce Demo & Restful-Booker |
| **Repositório** | https://github.com/matheussantozqa/Be_Talent_TestTec_Web-API |
| **Tipo de Aplicação** | Web App (Frontend) e API REST (Backend) |
| **Tecnologias Principais** | Playwright, Postman, Markdown |
| **Versão do Plano** | 1.0 |
| **Data** | Maio / 2026 |
| **Responsável QA** | Matheus Santos |

## 3. Escopo

### 3.1 Em Escopo
**UI Testing (Sauce Demo):**
- **Autenticação:** Login com diferentes tipos de usuários e Logout.
- **Gestão de Produtos:** Ordenação e filtragem de produtos na vitrine.
- **Carrinho e Checkout:** Adição/remoção de itens do carrinho e fluxo completo de compra.
- **Navegação:** Transição correta entre as páginas do site.
- **Diferenciais (Nível 2):** Testes de responsividade (Mobile/Tablet), testes de acessibilidade e automação completa dos fluxos via Playwright.

**API Testing (Restful-Booker):**
- **Autenticação:** Geração de token de acesso (Autenticação básica).
- **Gestão de Reservas (CRUD):** Criação, leitura, atualização e exclusão de reservas.
- **Validações:** Verificação de campos obrigatórios e tratamento de erros.
- **Diferenciais (Nível 2):** Testes de performance básicos, testes de segurança (validação de acesso sem token) e automação via scripts no Postman.

### 3.2 Fora de Escopo
- Testes de carga extremos (Stress Testing) que possam comprometer a estabilidade dos servidores públicos do Sauce Demo e Restful-Booker.
- Testes de infraestrutura, banco de dados interno ou integrações de terceiros não expostas nas interfaces fornecidas.

## 4. Equipe

| Papel | Responsável | Responsabilidades |
| :--- | :--- | :--- |
| **Líder de QA / Analista de QA** | Matheus Santos | Planejamento, autoria de cenários, execução de testes manuais e automatizados, análise de bugs e elaboração da documentação final. |

## 5. Riscos e Mitigações

| Risco | Impacto | Probabilidade | Mitigação |
| :--- | :--- | :--- | :--- |
| **Indisponibilidade dos ambientes públicos (Sauce Demo ou Restful-Booker)** | Alto | Média | Realizar os testes em horários alternativos e documentar imediatamente qualquer instabilidade com capturas de tela. |
| **Mudanças inesperadas no DOM da aplicação UI** | Médio | Baixa | Utilizar seletores robustos no Playwright para evitar quebra de scripts. |
| **Limitações de taxa (Rate Limiting) na API** | Médio | Média | Inserir pausas (delays) estratégicas nos scripts do Postman e evitar execuções em loop infinito durante os testes de performance. |

## 6. Estratégia de Teste

| Tipo de Teste | Descrição | Abordagem |
| :--- | :--- | :--- |
| **Funcional (Manual e Automatizado)** | Validação de fluxos de negócio, regras de carrinho, CRUD de API e autenticação. | Manual e Automatizado (Playwright / Postman) |
| **UI / UX e Acessibilidade** | Garantir a responsividade do design e conformidade básica com diretrizes de acessibilidade. | Automatizado e Manual  |
| **Compatibilidade** | Execução em diferentes resoluções de tela (Desktop e Mobile simulado). | Automatizado (Playwright - Emulação de Dispositivos) |
| **API / Integração** | Validação de status codes, contratos JSON, tempo de resposta e segurança de endpoints. | Automatizado (Postman Scripts / Collection Runner) |
| **Regressão** | Garantir que os fluxos principais funcionem de ponta a ponta sem falhas. | Automatizado (Playwright e Postman) |

## 7. Atividades e Estimativas

| Atividade | Responsável | Estimativa | Prazo |
| :--- | :--- | :--- | :--- |
| **Análise de requisitos e configuração de ambiente** | Matheus Santos | 2h | Dia 1 |
| **Autoria de cenários e testes manuais exploratórios** | Matheus Santos | 4h | Dia 1 - Dia 2 |
| **Desenvolvimento da automação UI (Playwright)** | Matheus Santos | 8h | Dia 2 - Dia 3 |
| **Desenvolvimento da automação API (Postman)** | Matheus Santos | 6h | Dia 3 - Dia 4 |
| **Execução, rastreamento de bugs e documentação final** | Matheus Santos | 4h | Dia 5 |


## 8. Critérios de Aceitação
1. **UI:** O fluxo de compra completo (Login > Adicionar ao Carrinho > Checkout > Logout) é executado com sucesso via automação no Playwright.
2. **UI:** Filtros de ordenação de produtos funcionam corretamente e a interface é responsiva.
3. **API:** Todos os endpoints do CRUD de reservas retornam os *status codes* esperados.
4. **API:** A Collection do Postman pode ser executada de ponta a ponta utilizando variáveis de ambiente sem intervenção manual.
5. **Geral:** 100% dos requisitos do Nível 1 (Obrigatório) foram atendidos e documentados no repositório GitHub.
6. **Geral:** Evidências (capturas de tela/gravações) e o arquivo `README.md` estão devidamente anexados e claros.

## 9. Ambientes de Teste

| Ambiente | URL / Configuração | Dispositivos |
| :--- | :--- | :--- |
| **UI - Sauce Demo** | `https://www.saucedemo.com/v1/` | Desktop via Playwright (Chromium/Firefox/WebKit) |
| **UI - Sauce Demo (Mobile )** | Manual Check / Chrome DevTools | Mobile |
| **API - Restful-Booker (Produção)** | `https://restful-booker.herokuapp.com/` | Postman Desktop/Web |