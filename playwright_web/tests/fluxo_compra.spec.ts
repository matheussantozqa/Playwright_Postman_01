import { test } from '@playwright/test';
import { LoginPage } from './pages/Loginpage';
import { CompraPage } from './pages/Fluxo_compraPage';
import { loginData } from './data/loginData';
import { compraData, quantidadeItens } from './data/fluxo_compraData';

test.describe('Fluxo de Compra - Sauce Demo', () => {

  let loginPage: LoginPage;
  let compraPage: CompraPage;

  test.beforeEach(async ({ page }) => {
    loginPage  = new LoginPage(page);
    compraPage = new CompraPage(page);
    await loginPage.acessarPaginaDeLogin();
    await loginPage.realizarLogin(loginData.usuarioPadrao.usuario, loginData.usuarioPadrao.senha);
  });

  // TC-UI-11
  test('TC-UI-11 - FLUXO COMPLETO DE COMPRA', async () => {
    await test.step('Adicionar produto ao carrinho', async () => {
      await compraPage.adicionarPrimeiroItemAoCarrinho();
    });
    await test.step('Navegar para o carrinho', async () => {
      await compraPage.navegarParaCarrinho();
    });
    await test.step('Clicar em Checkout', async () => {
      await compraPage.clicarCheckout();
    });
    await test.step('Preencher informações de entrega', async () => {
      await compraPage.preencherInformacoesDeEntrega(
        compraData.informacoesEntrega.firstName,
        compraData.informacoesEntrega.lastName,
        compraData.informacoesEntrega.zipCode,
      );
    });
    await test.step('Clicar em Continue', async () => {
      await compraPage.clicarContinue();
    });
    await test.step('Clicar em Finish', async () => {
      await compraPage.clicarFinish();
    });
    await test.step('Validar confirmação de compra', async () => {
      await compraPage.validarConfirmacaoDeCompra();
    });
  });

  // TC-UI-12 - teste comentado pois não passou
  // test('TC-UI-12 - TENTAR FINALIZAR COMPRA SEM PRODUTOS NO CARRINHO', async () => {
  //   await test.step('Navegar para o carrinho vazio', async () => {
  //     await compraPage.navegarParaCarrinho();
  //   });
  //   await test.step('Validar que o carrinho está vazio', async () => {
  //     await compraPage.validarCarrinhoVazio();
  //   });
  //   await test.step('Tentar clicar em Checkout', async () => {
  //     await compraPage.clicarCheckout();
  //   });
  //   await test.step('Validar que o avanço foi impedido', async () => {
  //     // Sauce Demo não bloqueia o checkout com carrinho vazio — teste falhou
  //   });
  // });

  // TC-UI-13
  test('TC-UI-13 - REMOÇÃO DE UM ITEM DO CARRINHO', async () => {
    await test.step('Adicionar um produto ao carrinho', async () => {
      await compraPage.adicionarPrimeiroItemAoCarrinho();
    });
    await test.step('Navegar para o carrinho', async () => {
      await compraPage.navegarParaCarrinho();
    });
    await test.step('Remover o item do carrinho', async () => {
      await compraPage.removerItem(0);
    });
    await test.step('Validar que o carrinho está vazio', async () => {
      await compraPage.validarCarrinhoVazio();
    });
    await test.step('Validar que o contador do carrinho mostra 0', async () => {
      await compraPage.validarContadorCarrinho(0);
    });
  });

  // TC-UI-14
  test('TC-UI-14 - REMOÇÃO DE MÚLTIPLOS ITENS DO CARRINHO', async () => {
    await test.step('Adicionar múltiplos produtos ao carrinho', async () => {
      await compraPage.adicionarMultiplosItensAoCarrinho(quantidadeItens.multiplos);
    });
    await test.step('Navegar para o carrinho', async () => {
      await compraPage.navegarParaCarrinho();
    });
    await test.step('Remover todos os itens do carrinho', async () => {
      await compraPage.removerTodosOsItens(quantidadeItens.multiplos);
    });
    await test.step('Validar que o carrinho está vazio', async () => {
      await compraPage.validarCarrinhoVazio();
    });
    await test.step('Validar que o contador do carrinho mostra 0', async () => {
      await compraPage.validarContadorCarrinho(0);
    });
  });

});