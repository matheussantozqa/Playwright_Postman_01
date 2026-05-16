import { test } from '@playwright/test';
import { LoginPage } from './pages/Loginpage';
import { FiltroPage } from './pages/FiltroPage';
import { loginData } from './data/loginData';
import { ordenacaoOpcoes } from './data/filtroData';

test.describe('Filtros - Sauce Demo', () => {

  let loginPage: LoginPage;
  let filtroPage: FiltroPage;

  test.beforeEach(async ({ page }) => {
    loginPage  = new LoginPage(page);
    filtroPage = new FiltroPage(page);
    await loginPage.acessarPaginaDeLogin();
    await loginPage.realizarLogin(loginData.usuarioPadrao.usuario, loginData.usuarioPadrao.senha);
  });

  // TC-UI-07
  test('TC-UI-07 - FILTRO DE PRODUTOS POR PREÇO CRESCENTE', async () => {
    await test.step('Selecionar ordenação "Price (low to high)"', async () => {
      await filtroPage.selecionarOrdenacao(ordenacaoOpcoes.precocrescente);
    });
    await test.step('Validar produtos ordenados por preço crescente', async () => {
      await filtroPage.validarOrdenacaoPorPrecoCrescente();
    });
  });

  // TC-UI-08
  test('TC-UI-08 - FILTRO DE PRODUTOS POR PREÇO DECRESCENTE', async () => {
    await test.step('Selecionar ordenação "Price (high to low)"', async () => {
      await filtroPage.selecionarOrdenacao(ordenacaoOpcoes.precoDecrescente);
    });
    await test.step('Validar produtos ordenados por preço decrescente', async () => {
      await filtroPage.validarOrdenacaoPorPrecoDecrescente();
    });
  });

  // TC-UI-09
  test('TC-UI-09 - FILTRO DE PRODUTOS POR NOME A-Z', async () => {
    await test.step('Selecionar ordenação "Name (A to Z)"', async () => {
      await filtroPage.selecionarOrdenacao(ordenacaoOpcoes.nomeAZ);
    });
    await test.step('Validar produtos ordenados por nome A-Z', async () => {
      await filtroPage.validarOrdenacaoPorNomeAZ();
    });
  });

  // TC-UI-10
  test('TC-UI-10 - FILTRO DE PRODUTOS POR NOME Z-A', async () => {
    await test.step('Selecionar ordenação "Name (Z to A)"', async () => {
      await filtroPage.selecionarOrdenacao(ordenacaoOpcoes.nomeZA);
    });
    await test.step('Validar produtos ordenados por nome Z-A', async () => {
      await filtroPage.validarOrdenacaoPorNomeZA();
    });
  });

});