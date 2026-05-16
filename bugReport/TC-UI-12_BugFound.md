###BUG-UI-12 TENTAR FINALIZAR COMPRA SEM PRODUTOS NO CARRINHO

**Description**
Bug funcional identificado durante a execução do teste de aceitação manual ao validar o comportamento da aplicação ao tentar prosseguir para o checkout com o carrinho vazio.

**Pre conditions:**

O usuário deve estar logado na aplicação Sauce Demo com credenciais válidas.
O carrinho de compras deve estar vazio.

**Expected results:**

Dado que o usuário está logado na aplicação
Quando o usuário navega para a página do carrinho
E o carrinho está vazio
E o usuário tenta clicar em "Checkout"
Então o botão "Checkout" deve estar desabilitado ou uma mensagem de erro/aviso deve ser exibida, impedindo o avanço para o formulário de informações

Actual result:

A aplicação permite avançar para a etapa de checkout e finalizar a compra mesmo com o carrinho vazio.

Severity: Alta

Priority: Medium

Status: Open 🚨

Evidence:


https://github.com/user-attachments/assets/8ef628e6-48c1-43f8-8f3c-26cfe5279eae



Environment: Chrome - Opera

Device: Windows 11
