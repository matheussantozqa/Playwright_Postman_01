### TC-UI-11 FLUXO COMPLETO DE COMPRA (COM PRODUTOS)

**Description**
Teste de Aceitação Funcional Manual focado em validar a adição de itens ao carrinho e a finalização do processo de checkout com sucesso.

**Pre conditions:**
- O usuário deve estar logado na aplicação Sauce Demo com credenciais válidas.
- A página de listagem de produtos deve estar visível.

**Expected results:**

- Dado que o usuário está na página de produtos
- Quando o usuário clica em "Add to cart" em pelo menos um produto
- E navega para a página do carrinho
- E clica em "Checkout"
- E preenche as informações de "First Name", "Last Name" e "Zip/Postal Code"
- E clica em "Continue"
- E clica em "Finish" na página de visão geral
- Então a página de confirmação de compra ("THANK YOU FOR YOUR ORDER") carrega com sucesso sem erros

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/5ad931b6-e2a9-470a-ba0d-f81afdcae093


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-12 TENTAR FINALIZAR COMPRA SEM PRODUTOS NO CARRINHO

**Description**
Teste de Aceitação Funcional Manual focado em validar o comportamento da aplicação ao tentar prosseguir para o checkout com o carrinho vazio.

**Pre conditions:**
- O usuário deve estar logado na aplicação Sauce Demo com credenciais válidas.
- O carrinho de compras deve estar vazio.

**Expected results:**

- Dado que o usuário está logado na aplicação
- Quando o usuário navega para a página do carrinho
- E o carrinho está vazio
- E o usuário tenta clicar em "Checkout"
- Então o botão "Checkout" deve estar desabilitado ou uma mensagem de erro/aviso deve ser exibida, impedindo o avanço para o formulário de informações

**Status:** Reprovado 🚨 

**Evidence:** 


https://github.com/user-attachments/assets/f757e4fd-0be9-432e-a4c6-238540bb1a1e


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-13 REMOÇÃO DE UM ITEM DO CARRINHO

**Description**
Teste de Aceitação Funcional Manual focado em validar a remoção de um único item do carrinho de compras.

**Pre conditions:**
- O usuário deve estar logado na aplicação Sauce Demo com credenciais válidas.
- Pelo menos um item deve ter sido adicionado ao carrinho.

**Expected results:**

- Dado que o usuário adicionou um produto ao carrinho
- Quando o usuário navega para a página do carrinho
- E clica em "Remove" no item adicionado
- Então o item é removido da lista do carrinho
- E o ícone do carrinho é atualizado para mostrar "0" itens

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/edc93b4c-84a2-4935-93b3-b729e5ed02f6


**Environment:** Chrome - Opera

**Device:** Windows 11

---

### TC-UI-14 REMOÇÃO DE MÚLTIPLOS ITENS DO CARRINHO

**Description**
Teste de Aceitação Funcional Manual focado em validar a remoção de múltiplos itens do carrinho de compras.

**Pre conditions:**
- O usuário deve estar logado na aplicação Sauce Demo com credenciais válidas.
- Múltiplos itens devem ter sido adicionados ao carrinho.

**Expected results:**

- Dado que o usuário adicionou múltiplos produtos ao carrinho
- Quando o usuário navega para a página do carrinho
- E clica em "Remove" em cada um dos itens adicionados
- Então cada item é removido da lista do carrinho sequencialmente
- E o ícone do carrinho é atualizado para refletir a quantidade restante de itens, até chegar a "0"

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/2266afcd-6714-49d5-af97-cd47a35a130c


**Environment:** Chrome - Opera

**Device:** Windows 11

---
