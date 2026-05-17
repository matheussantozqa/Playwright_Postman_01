###BUG_RESP-03 RESPONSIVIDADE NO DETALHE DO PRODUTO

**Description**
Bug de UI identificado durante a execução do teste de responsividade ao validar o comportamento da aplicação ao utilizar a aba de detalhes de produto em diversos dispositivos: web - mobile e tablet.

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

**Actual result:**

A Hero Section quando scrolamos para baixo nos dispositivos tablet e mobile, está sendo cropado na lateral direita.

**Severity:** Baixa

**Priority:** Baixa

**Status:** Open 🚨

**Evidence:**


https://github.com/user-attachments/assets/2a8a1644-7a8c-4db7-9a6b-cb2bd6dada8b




**Environment:** Chrome - Opera

**Device:** Windows 11
