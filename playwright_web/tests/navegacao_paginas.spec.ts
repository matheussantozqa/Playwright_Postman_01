import { test } from '@playwright/test';
import { LoginPage } from './pages/Loginpage';
import { NavegacaoPaginasPage } from './pages/Navegacao_paginasPage';
import { loginData } from './data/loginData';

test.describe('Navegação entre Páginas - Sauce Demo', () => {

  let loginPage: LoginPage;
  let navegacaoPage: NavegacaoPaginasPage;

  test.beforeEach(async ({ page }) => {
    loginPage     = new LoginPage(page);
    navegacaoPage = new NavegacaoPaginasPage(page);
    await loginPage.acessarPaginaDeLogin();
    await loginPage.realizarLogin(loginData.usuarioPadrao.usuario, loginData.usuarioPadrao.senha);
  });

  // TC-UI-15
  test('TC-UI-15 - NAVEGAÇÃO ENTRE PÁGINAS', async () => {
    await test.step('Adicionar item ao carrinho como pré-condição', async () => {
      await navegacaoPage.adicionarPrimeiroItemAoCarrinho();
    });

    await test.step('Abrir menu e clicar em "All Items"', async () => {
      await navegacaoPage.abrirMenu();
      await navegacaoPage.clicarAllItems();
    });
    await test.step('Validar que a página de produtos carregou', async () => {
      await navegacaoPage.validarPaginaDeProdutosCarregada();
    });

    await test.step('Abrir menu e clicar em "About"', async () => {
      await navegacaoPage.abrirMenu();
      await navegacaoPage.clicarAbout();
    });
    await test.step('Validar que a página institucional da Sauce Labs carregou', async () => {
      await navegacaoPage.validarPaginaAboutCarregada();
    });
    await test.step('Voltar para a página de produtos', async () => {
      await navegacaoPage.goBack();
    });

    await test.step('Abrir menu e clicar em "Reset App State"', async () => {
      await navegacaoPage.abrirMenu();
      await navegacaoPage.clicarResetAppState();
    });
    await test.step('Validar que o estado da aplicação foi resetado', async () => {
      await navegacaoPage.validarCarrinhoResetado();
    });
  });

});