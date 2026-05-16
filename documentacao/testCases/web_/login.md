### TC-UI-01 LOGIN COM USUÁRIO PADRÃO

**Description**
Teste de Aceitação Funcional Manual focado em validar o acesso à aplicação Sauce Demo utilizando credenciais válidas de um usuário padrão.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.
- O serviço web do Sauce Demo deve estar acessível.

**Expected results:**

- Dado que o usuário está na página de login
- Quando o usuário insere o username "standard_user" e a senha "secret_sauce"
- E clica no botão de Login
- Então a página de listagem de produtos carrega com sucesso sem erros

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/03249929-b066-4dd1-bf7e-02c35ab35d58


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-02 LOGIN COM USUÁRIO BLOQUEADO

**Description**
Teste de Aceitação Funcional Manual focado em validar a restrição de acesso à aplicação Sauce Demo utilizando credenciais de um usuário bloqueado.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

- Dado que o usuário está na página de login
- Quando o usuário insere o username "locked_out_user" e a senha "secret_sauce"
- E clica no botão de Login
- Então uma mensagem de erro indicando que o usuário está bloqueado é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/b9fde04c-0a6b-4dd4-8244-051e00c8f2f6


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-03 LOGIN COM CAMPOS VAZIOS

**Description**
Teste de Aceitação Funcional Manual focado em validar o comportamento da aplicação ao tentar realizar login com campos de usuário e/ou senha vazios.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

- Dado que o usuário está na página de login
- Quando o usuário deixa o campo de username e senha vazio
- E clica no botão de Login
- Então uma mensagem de erro "Epic sadface: Password is required" é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/4701787d-b5e6-4ee9-bb3c-15a881140713


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-04 LOGIN COM SENHA INCORRETA

**Description**
Teste de Aceitação Funcional Manual focado em validar o comportamento da aplicação ao tentar realizar login com uma senha incorreta para um usuário válido.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

- Dado que o usuário está na página de login
- Quando o usuário insere o username "standard_user" e uma senha inválida ("wrong_password")
- E clica no botão de Login
- Então uma mensagem de erro "Epic sadface: Username and password do not match any user in this service" é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/b0bf89b3-32c3-412a-b5e1-2eda8c2acee7


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-05 LOGIN COM USUÁRIO INEXISTENTE

**Description**
Teste de Aceitação Funcional Manual focado em validar o comportamento da aplicação ao tentar realizar login com um usuário que não existe no sistema.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

- Dado que o usuário está na página de login
- Quando o usuário insere um username inexistente 
- e senha correta
- E clica no botão de Login
- Então uma mensagem de erro "Epic sadface: Username and password do not match any user in this service" é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/0995626a-0d47-494a-ad7b-3cf3b6eb81e4


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-06 LOGOUT DA APLICAÇÃO

**Description**
Teste de Aceitação Funcional Manual focado em validar a funcionalidade de encerramento de sessão (logout) da aplicação Sauce Demo.

**Pre conditions:**
- O usuário deve estar logado na aplicação Sauce Demo com credenciais válidas.
- O menu lateral de navegação deve estar acessível.

**Expected results:**

- Dado que o usuário está logado na aplicação
- Quando o usuário clica no botão de menu (hambúrguer) no canto superior esquerdo
- E clica em "Logout" no menu lateral
- Então o usuário é redirecionado para a página de login com sucesso sem erros

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/a7b0b7db-31ed-4643-a32e-40a103e65ba5


**Environment:** Chrome - Opera

**Device:** Windows 11
