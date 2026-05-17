### RESP-01 RESPONSIVIDADE NA TELA DE LOGIN

**Description**
Teste de Responsividade focado em validar a adaptação da tela de login do Sauce Demo em viewports mobile, tablet e desktop.

**Pre conditions:**
- Acessar https://www.saucedemo.com
- Testar nos viewports: 375×667 (mobile), 768×1024 (tablet), 1280×800 (desktop)

**Expected results:**
- Dado que o usuário acessa a tela de login
- Quando o viewport é redimensionado para 375×667 (mobile), 768×1024 (tablet) e 1280×800 (desktop)
- Então o formulário ocupa a largura disponível sem overflow horizontal em todos os viewports
- E os campos username, password e botão Login são totalmente visíveis sem scroll horizontal
- E o botão Login possui área de toque no viewport mobile
- E no desktop o formulário está centralizado com proporções adequadas

**Status:** Aprovado ✅
**Evidence:** —
**Environment:** Chrome — DevTools — Window Resizer
**Device:** Windows 11

---

### RESP-02 RESPONSIVIDADE NA LISTAGEM DE PRODUTOS

**Description**
Teste de Responsividade focado em validar a adaptação do grid de produtos do Sauce Demo em diferentes breakpoints.

**Pre conditions:**
- Usuário logado com `standard_user`
- Testar nos viewports: 375×667 (mobile), 768×1024 (tablet), 1280×800 (desktop)

**Expected results:**
- Dado que o usuário está na listagem de produtos
- Quando o viewport é redimensionado para 375×667 (mobile), 768×1024 (tablet) e 1280×800 (desktop)
- Então o grid exibe 1 coluna em mobile, 1 em tablet e 2 em desktop
- E os cards não apresentam overflow horizontal em nenhum viewport
- E os botões "Add to Cart" possuem área de toque no viewport mobile
- E o header com ícone de carrinho e menu hambúrguer está totalmente visível em todos os viewports

**Status:** Aprovado ✅
**Evidence:** —
**Environment:** Chrome — DevTools — Window Resizer
**Device:** Windows 11

---

### RESP-03 RESPONSIVIDADE NO DETALHE DO PRODUTO

**Description**
Teste de Responsividade focado em validar a adaptação da tela de detalhe de produto do Sauce Demo em diferentes viewports.

**Pre conditions:**
- Usuário logado com `standard_user`
- Acessar o detalhe de qualquer produto
- Testar nos viewports: 375×667 (mobile), 768×1024 (tablet), 1280×800 (desktop)

**Expected results:**
- Dado que o usuário acessa o detalhe de um produto
- Quando o viewport é redimensionado para 375×667 (mobile), 768×1024 (tablet) e 1280×800 (desktop)
- Então a imagem do produto é redimensionada proporcionalmente sem overflow em todos os viewports
- E nome, descrição e preço estão legíveis e sem truncamento em todos os viewports
- E os botões "Add to Cart" e "Back" possuem área de toque no viewport mobile
- E no desktop imagem e detalhes são exibidos lado a lado com espaçamento adequado

**Status:** Reprovado 🚨
**Evidence:** —
**Environment:** Chrome — DevTools — Window Resizer
**Device:** Windows 11

---

### RESP-04 FLUXO COMPLETO DE COMPRA — RESPONSIVIDADE

**Description**
Teste de Responsividade focado em validar a adaptação das telas de carrinho, checkout e confirmação de pedido do Sauce Demo em viewports mobile, tablet e desktop.

**Pre conditions:**
- Usuário logado com `standard_user`
- Ao menos 1 produto adicionado ao carrinho
- Testar nos viewports: 375×667 (mobile), 768×1024 (tablet), 1280×800 (desktop)

**Expected results:**
- Dado que o usuário percorre o fluxo de compra (carrinho → checkout step 1 → checkout step 2 → confirmação)
- Quando o viewport é redimensionado para 375×667 (mobile), 768×1024 (tablet) e 1280×800 (desktop)

E o Carrinho: itens com nome, quantidade, preço e botão "Remove" são exibidos sem overflow horizontal; botões "Continue Shopping" e "Checkout" têm área de toque  no mobile
E Checkout Step 1: campos First Name, Last Name e Zip estão alinhados verticalmente sem scroll horizontal; labels são legíveis; botões têm área de toque  no mobile
E Checkout Step 2: itens, subtotal, tax e total são exibidos sem overflow; valores não são truncados; botões "Finish" e "Cancel" têm área de toque  no mobile
Então a imagem de confirmação é redimensionada proporcionalmente; mensagem de sucesso está totalmente visível; botão "Back Home" tem área de toque  no mobile
E nenhuma tela apresenta scroll horizontal em qualquer viewport

**Status:** Aprovado ✅
**Evidence:** —
**Environment:** Chrome — DevTools— Window Resizer
**Device:** Windows 11

---
