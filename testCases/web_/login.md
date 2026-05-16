### TC-UI-01 LOGIN COM USUÁRIO PADRÃO (VÁLIDO)

**Description**
Teste de Aceitação Funcional Manual focado em validar o acesso à aplicação Sauce Demo utilizando credenciais válidas de um usuário padrão.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.
- O serviço web do Sauce Demo deve estar acessível.

**Expected results:**

Dado que o usuário está na página de login
Quando o usuário insere o username "standard_user" e a senha "secret_sauce"
E clica no botão de Login
Então a página de listagem de produtos carrega com sucesso sem erros

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/41d7cffc-dd98-4c32-b05e-454dc145acb1



**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-02 LOGIN COM USUÁRIO BLOQUEADO

**Description**
Teste de Aceitação Funcional Manual focado em validar a restrição de acesso à aplicação Sauce Demo utilizando credenciais de um usuário bloqueado.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

Dado que o usuário está na página de login
Quando o usuário insere o username "locked_out_user" e a senha "secret_sauce"
E clica no botão de Login
Então uma mensagem de erro indicando que o usuário está bloqueado é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/13342c8e-2f08-4a15-b846-bdbdbbc8b8ee



**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-03 LOGIN COM CAMPOS VAZIOS

**Description**
Teste de Aceitação Funcional Manual focado em validar o comportamento da aplicação ao tentar realizar login com campos de usuário e/ou senha vazios.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

Dado que o usuário está na página de login
Quando o usuário clica no botão de Login sem preencher nenhum campo
Então uma mensagem de erro "Epic sadface: Username is required" é exibida na tela

Dado que o usuário está na página de login
Quando o usuário insere o username "standard_user" e deixa o campo de senha vazio
E clica no botão de Login
Então uma mensagem de erro "Epic sadface: Password is required" é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/af1c0c47-645f-45f3-afe3-a4982ce36705



**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-04 LOGIN COM SENHA INCORRETA

**Description**
Teste de Aceitação Funcional Manual focado em validar o comportamento da aplicação ao tentar realizar login com uma senha incorreta para um usuário válido.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

Dado que o usuário está na página de login
Quando o usuário insere o username "standard_user" e uma senha inválida ("wrong_password")
E clica no botão de Login
Então uma mensagem de erro "Epic sadface: Username and password do not match any user in this service" é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/c4760fb2-8b91-456c-8e46-37bbf3a0b9c1



**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-05 LOGIN COM USUÁRIO INEXISTENTE

**Description**
Teste de Aceitação Funcional Manual focado em validar o comportamento da aplicação ao tentar realizar login com um usuário que não existe no sistema.

**Pre conditions:**
- O usuário deve estar na página de login do Sauce Demo.

**Expected results:**

Dado que o usuário está na página de login
Quando o usuário insere um username inexistente 
e senha correta
E clica no botão de Login
Então uma mensagem de erro "Epic sadface: Username and password do not match any user in this service" é exibida na tela

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/93b154a3-2d97-41fa-9662-8394d6b02a41



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

Dado que o usuário está logado na aplicação
Quando o usuário clica no botão de menu (hambúrguer) no canto superior esquerdo
E clica em "Logout" no menu lateral
Então o usuário é redirecionado para a página de login com sucesso sem erros

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/d80bc73e-1306-4dde-b756-01c1ffcf8cd4



**Environment:** Chrome - Opera

**Device:** Windows 11
