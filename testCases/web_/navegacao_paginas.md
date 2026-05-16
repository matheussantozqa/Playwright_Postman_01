### TC-UI-15 NAVEGAÇÃO ENTRE PÁGINAS (MENU LATERAL)

**Description**
Teste de Aceitação Funcional Manual focado em validar a navegação entre as principais seções do site através do menu lateral.

**Pre conditions:**
- O usuário deve estar logado na aplicação Sauce Demo com credenciais válidas.
- O usuário deve estar numa página sem ser a home e ter adicionado algum item ao carrinho
- O menu lateral de navegação deve estar acessível.

**Expected results:**

Dado que o usuário está logado na aplicação
Quando o usuário clica no botão de menu (hambúrguer) no canto superior esquerdo
E clica em "All Items" no menu lateral
Então a página de listagem de produtos carrega com sucesso

Quando o usuário clica no botão de menu (hambúrguer)
E clica em "About" no menu lateral
Então a página institucional da Sauce Labs carrega com sucesso

Quando o usuário clica no botão de menu (hambúrguer)
E clica em "Reset App State" no menu lateral
Então o estado da aplicação é resetado (ex: carrinho vazio, filtros padrão)

**Status:** Aprovado ✅

**Evidence:** 


https://github.com/user-attachments/assets/7a9fe8fa-6222-44d9-8938-505a6cd5935f



**Environment:** Chrome - Opera

**Device:** Windows 11

---
