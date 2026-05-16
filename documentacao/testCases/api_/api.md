## API Testing (Restful-Booker)

### TC-API-01 AUTENTICAÇÃO BÁSICA 

**Description**
Teste de Aceitação Funcional Manual com Postman focado em validar a geração de token de autenticação necessário para operações restritas na API.

**Pre conditions:**
- O serviço da API Restful-Booker deve estar online.
- O usuário deve possuir credenciais válidas de administrador (admin/password123).

**Expected results:**

Dado que o usuário prepara uma requisição POST para o endpoint "/auth"
Quando o usuário envia o payload com "username" e "password" válidos
Então a API retorna o status code 200 OK
E o corpo da resposta contém uma propriedade "token" válida

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/2e171804-678a-457e-b0ed-028ff3fb10b0


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-API-02 CRIAÇÃO DE RESERVA

**Description**
Teste de Aceitação Funcional Manual com Postman focado em validar a criação de uma nova reserva no sistema.

**Pre conditions:**
- O serviço da API Restful-Booker deve estar online.

**Expected results:**

Dado que o usuário prepara uma requisição POST para o endpoint "/booking"
Quando o usuário envia um payload JSON válido contendo firstname, lastname, totalprice, depositpaid, bookingdates e additionalneeds
Então a API retorna o status code 200 OK
E o corpo da resposta contém o "bookingid" gerado e os dados da reserva criados corretamente

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/1a7f32a1-eb53-4743-b1f2-05dd5a29a246


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-API-03 LEITURA E VALIDAÇÃO DE RESERVA

**Description**
Teste de Aceitação Funcional Manual com Postman focado em validar a consulta de uma reserva existente e a validação de seus campos.

**Pre conditions:**
- O serviço da API Restful-Booker deve estar online.
- Deve existir pelo menos um "bookingid" válido no sistema.

**Expected results:**

Dado que o usuário possui um "bookingid" válido
Quando o usuário envia uma requisição GET para o endpoint "/booking/{bookingid}"
Então a API retorna o status code 200 OK
E o corpo da resposta contém o bookingid preenchidos corretamente

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/c5eade28-bc5d-4106-bd2f-d0911ccc045b


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-API-04 ATUALIZAÇÃO DE RESERVA 

**Description**
Teste de Aceitação Funcional Manual com Postman focado em validar a atualização completa dos dados de uma reserva existente.

**Pre conditions:**
- O serviço da API Restful-Booker deve estar online.
- Deve existir um "bookingid" válido no sistema.
- O usuário deve possuir um token de autenticação válido.

**Expected results:**

Dado que o usuário possui um "bookingid" e um token de autenticação válidos
Quando o usuário envia uma requisição PUT para o endpoint "/booking/{bookingid}" com o header "Cookie: token={token}"
E envia um payload JSON com os dados da reserva atualizados
Então a API retorna o status code 200 OK
E o corpo da resposta reflete as alterações enviadas no payload

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/dca22eac-c7e0-441e-befa-fcfebb816cda


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-API-05 EXCLUSÃO DE RESERVA (DELETE)

**Description**
Teste de Aceitação Funcional Manual com Postman focado em validar a exclusão de uma reserva existente no sistema.

**Pre conditions:**
- O serviço da API Restful-Booker deve estar online.
- Deve existir um "bookingid" válido no sistema.
- O usuário deve possuir um token de autenticação válido.

**Expected results:**

Dado que o usuário possui um "bookingid" e um token de autenticação válidos
Quando o usuário envia uma requisição DELETE para o endpoint "/booking/{bookingid}" com o header "Cookie: token={token}"
Então a API retorna o status code 201 Created (comportamento específico desta API para deleção bem-sucedida)

Quando o usuário envia uma requisição GET para o mesmo "bookingid" excluído
Então a API retorna o status code 404 Not Found

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/905a5a02-b1a3-4a1e-8436-a9b80c513d40


**Environment:** Chrome - Opera

**Device:** Windows 11
