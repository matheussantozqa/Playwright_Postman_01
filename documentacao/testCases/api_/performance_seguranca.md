## PERFORMANCE — Restful Booker API

> Verifica tempo de resposta, throughput e comportamento sob carga | **API**---

### PT-01 TEMPO DE RESPOSTA — AUTENTICAÇÃO
**Description**
Teste de Performance focado em validar o tempo de resposta do endpoint de autenticação da Restful Booker API sob condição de requisição única.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman aberto com a requisição POST /auth configurada
- Credenciais válidas: `admin` / `password123`

**Expected results:**
- Dado que 1 usuário realiza 1 requisição POST /auth com credenciais válidas
- Quando a requisição é enviada
- Então o status deve ser 200 OK
- E o tempo de resposta deve ser inferior a 2000ms
- E o body deve retornar um token válido

**Status:** Aprovado ✅

**Evidence:** —

**Environment:** API — Postman

**Device:** Windows 11

---

### PT-02 TEMPO DE RESPOSTA — LISTAR RESERVAS
**Description**
Teste de Performance focado em validar o tempo de resposta do endpoint de listagem de reservas da Restful Booker API sob condição de requisição única sem filtros.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman aberto com a requisição GET /booking configurada sem filtros

**Expected results:**
- Dado que 1 usuário realiza 1 requisição GET /booking sem filtros
- Quando a requisição é enviada
- Então o status deve ser 200 OK
- E o tempo de resposta deve ser inferior a 2000ms
- E o body deve retornar uma lista com IDs de reservas

**Status:** Aprovado ✅
**Evidence:** —
**Environment:** API — Postman
**Device:** Windows 11

---

### PT-03 TEMPO DE RESPOSTA — CRIAR RESERVA
**Description**
Teste de Performance focado em validar o tempo de resposta do endpoint de criação de reservas da Restful Booker API sob condição de requisição única.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman aberto com a requisição POST /booking configurada com payload válido

**Expected results:**
- Dado que 1 usuário realiza 1 requisição POST /booking com payload válido
- Quando a requisição é enviada
- Então o status deve ser 200 OK
- E o tempo de resposta deve ser inferior a 2000ms
- E o body deve retornar o objeto da reserva criada com `bookingid`

**Status:** Aprovado ✅
**Evidence:** —
**Environment:** API — Postman
**Device:** Windows 11

---

### PT-04 CARGA MODERADA — LISTAGEM DE RESERVAS
**Description**
Teste de Performance focado em validar o comportamento do endpoint de listagem de reservas da Restful Booker API sob carga moderada de usuários virtuais simultâneos.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- k6 instalado e configurado
- Script configurado com 10 VUs por 30 segundos

**Expected results:**
- Dado que 10 usuários virtuais realizam requisições GET /booking simultaneamente por 30 segundos
- Quando a carga é aplicada
- Então ≥ 95% das respostas devem ser 200 OK
- E p95 do tempo de resposta deve ser < 3000ms
- E error rate deve ser < 5%

**Status:** Pendente 🔲

**Evidence:** Aprovado ✅

**Environment:** API — k6

**Device:** Windows 11

---

### PT-05 STRESS — RAMPA ATÉ PONTO DE QUEBRA
**Description**
Teste de Stress focado em identificar o ponto de quebra da Restful Booker API sob escalada progressiva de carga no endpoint de listagem de reservas.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- k6 instalado e configurado
- Script configurado com ramp: 10 → 50 → 100 VUs em 2 minutos

**Expected results:**
- Dado que a carga é escalada progressivamente de 10 até 100 VUs em 2 minutos via k6
- Quando o limite de capacidade é atingido
- Então o sistema deve identificar o VU limite onde a performance degrada
- E as falhas devem ser controladas, sem retornar erro 500 em cascata
- E o p95 deve ser monitorado para identificar o ponto de degradação

**Status:** Aprovado ✅

**Evidence:** —

**Environment:** API — k6

**Device:** Windows 11

---

## SEGURANÇA — Restful Booker API

> Verifica autenticação, autorização e proteção contra ataques | **API**

---

### ST-01 ACESSO SEM AUTENTICAÇÃO DEVE SER NEGADO
**Description**
Teste de Segurança focado em validar que operações de escrita (PUT, PATCH, DELETE) sem token de autenticação são corretamente bloqueadas pela Restful Booker API.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman configurado sem header `Cookie` ou `Authorization`
- Deve existir um ID de reserva válido obtido via GET /booking

**Expected results:**
- Dado que requisições PUT /booking/{id}, PATCH /booking/{id} e DELETE /booking/{id} são enviadas sem header de autenticação
- Quando a API processa as requisições
- Então todas devem retornar 403 Forbidden
- E nenhuma alteração ou exclusão deve ser realizada na reserva

**Status:** Aprovado ✅

**Evidence:** —

**Environment:** API — Postman

**Device:** Windows 11

---

### ST-02 TOKEN INVÁLIDO DEVE SER REJEITADO
**Description**
Teste de Segurança focado em validar que a Restful Booker API rejeita tokens de autenticação inválidos em operações protegidas.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman configurado com token inválido no header `Cookie: token=tokeninvalido123`
- Deve existir um ID de reserva válido

**Expected results:**
- Dado que requisições PUT /booking/{id} e DELETE /booking/{id} são enviadas com token inválido
- Quando a API processa as requisições
- Então todas devem retornar 403 Forbidden
- E nenhuma alteração ou exclusão deve ser realizada na reserva

**Status:** Aprovado ✅

**Evidence:** —

**Environment:** API — Postman

**Device:** Windows 11

---

### ST-03 SQL INJECTION NO FILTRO DE BUSCA
**Description**
Teste de Segurança focado em validar que o endpoint de busca da Restful Booker API é resistente a ataques de SQL Injection nos parâmetros de query.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman configurado com os payloads maliciosos listados abaixo

**Expected results:**
- Dado que os seguintes payloads são enviados via GET /booking:
  - `?firstname=' OR '1'='1`
  - `?lastname='; DROP TABLE booking; --`
  - `?firstname=' UNION SELECT * FROM booking; --`
- Quando a API processa as requisições
- Então todas devem retornar 200 OK com lista normal ou vazia
- E nenhum erro 500 deve ser retornado
- E nenhuma exposição de dados internos deve ocorrer no body da resposta

**Status:** Aprovado ✅

**Evidence:** —

**Environment:** API — Postman

**Device:** Windows 11

---

### ST-04 BRUTE FORCE EM POST /AUTH — RATE LIMITING
**Description**
Teste de Segurança focado em validar que a Restful Booker API aplica rate limiting contra tentativas de força bruta no endpoint de autenticação.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman Runner configurado para repetir a requisição POST /auth 50 vezes com senha incorreta

**Expected results:**
- Dado que 50 requisições POST /auth com senha incorreta são enviadas em sequência via Postman Runner
- Quando o limite de tentativas é atingido
- Então a API deve retornar 429 Too Many Requests
- Ou a conta deve ser bloqueada temporariamente após N tentativas
- E nenhuma requisição além do limite deve ser processada normalmente

**Status:** Aprovado ✅

**Evidence:** —

**Environment:** API — Postman Runner

**Device:** Windows 11

---

### ST-05 EXPOSIÇÃO DE DADOS SENSÍVEIS NA RESPOSTA
**Description**
Teste de Segurança focado em validar que a Restful Booker API não expõe dados sensíveis desnecessários nos headers e body das respostas.

**Pre conditions:**
- A Restful Booker API deve estar acessível
- Postman configurado para inspecionar headers e body das respostas de GET /booking e GET /booking/{id}

**Expected results:**
- Dado que requisições GET /booking e GET /booking/{id} são enviadas sem autenticação
- Quando a API retorna as respostas
- Então os headers não devem expor informações de stack como versão do servidor ou tecnologia utilizada
- E o body não deve conter campos internos como senhas, hashes ou tokens
- E o header `X-Powered-By` não deve estar presente ou deve estar mascarado

**Status:** Reprovado 🚨

**Evidence:** —

**Environment:** API — Postman

**Device:** Windows 11

---

