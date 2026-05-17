###BUG_ST-05 EXPOSIÇÃO DE HEADER X-POWERED-BY NA RESPOSTA DA API

**Description**
Bug de Segurança identificado durante a execução do teste ST-05, ao validar a exposição de dados sensíveis nos headers das respostas da Restful Booker API. O problema foi identificado em ambas as requisições testadas: GET /booking e GET /booking/{id}.

**Pre conditions:**

A Restful Booker API deve estar acessível
Postman configurado para inspecionar headers e body das respostas de GET /booking e GET /booking/{id}
Requisições enviadas sem autenticação

**Expected results:**

- Dado que requisições GET /booking e GET /booking/{id} são enviadas sem autenticação
- Quando a API retorna as respostas
- Então os headers não devem expor informações de stack como versão do servidor ou tecnologia utilizada
- E o header X-Powered-By não deve estar presente ou deve estar mascarado

**Actual result:**

Ambas as requisições GET /booking e GET /booking/{id} retornam o header X-Powered-By: Express na resposta, expondo que a API utiliza Node.js com o framework Express. Essa informação facilita ataques direcionados à stack tecnológica e é classificada como exposição de informações sensíveis pelo OWASP Top 10.

**Severity:** Alta

**Priority:** Média

**Status:** Open 🚨

**Evidence:**


**Environment:** Chrome - Opera

**Device:** Windows 11