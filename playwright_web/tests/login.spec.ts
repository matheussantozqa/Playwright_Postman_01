import { test } from '@playwright/test';
import { LoginPage } from './pages/Loginpage';
import { loginData, mensagensErro } from './data/loginData';

test.describe('Login - Sauce Demo', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.acessarPaginaDeLogin();
  });

  // TC-UI-01
  test('TC-UI-01 - LOGIN COM USUÁRIO PADRÃO', async () => {
    await test.step('Fazer login com usuário padrão', async () => {
      await loginPage.realizarLogin(loginData.usuarioPadrao.usuario, loginData.usuarioPadrao.senha);
    });
    await test.step('Validar que a página de produtos foi carregada', async () => {
      await loginPage.validarPaginaDeProdutosCarregada();
    });
  });

  // TC-UI-02
  test('TC-UI-02 - LOGIN COM USUÁRIO BLOQUEADO', async () => {
    await test.step('Fazer login com usuário bloqueado', async () => {
      await loginPage.realizarLogin(loginData.usuarioBloqueado.usuario, loginData.usuarioBloqueado.senha);
    });
    await test.step('Validar mensagem de usuário bloqueado', async () => {
      await loginPage.validarMensagemDeErro(mensagensErro.usuarioBloqueado);
    });
  });

  // TC-UI-03
  test('TC-UI-03 - LOGIN COM CAMPOS VAZIOS', async () => {
    await test.step('Clicar em login sem preencher campos', async () => {
      await loginPage.clicarBotaoLogin();
    });
    await test.step('Validar mensagem de campo obrigatório', async () => {
      await loginPage.validarMensagemDeErro(mensagensErro.camposVazios);
    });
  });

  // TC-UI-04
  test('TC-UI-04 - LOGIN COM SENHA INCORRETA', async () => {
    await test.step('Fazer login com senha incorreta', async () => {
      await loginPage.realizarLogin(loginData.senhaIncorreta.usuario, loginData.senhaIncorreta.senha);
    });
    await test.step('Validar mensagem de credenciais inválidas', async () => {
      await loginPage.validarMensagemDeErro(mensagensErro.credenciaisInvalidas);
    });
  });

  // TC-UI-05
  test('TC-UI-05 - LOGIN COM USUÁRIO INEXISTENTE', async () => {
    await test.step('Fazer login com usuário inexistente', async () => {
      await loginPage.realizarLogin(loginData.usuarioInexistente.usuario, loginData.usuarioInexistente.senha);
    });
    await test.step('Validar mensagem de credenciais inválidas', async () => {
      await loginPage.validarMensagemDeErro(mensagensErro.credenciaisInvalidas);
    });
  });

  // TC-UI-06
  test('TC-UI-06 - LOGOUT DA APLICAÇÃO', async () => {
    await test.step('Fazer login com usuário padrão', async () => {
      await loginPage.realizarLogin(loginData.usuarioPadrao.usuario, loginData.usuarioPadrao.senha);
    });
    await test.step('Validar que a página de produtos foi carregada', async () => {
      await loginPage.validarPaginaDeProdutosCarregada();
    });
    await test.step('Abrir menu e clicar em logout', async () => {
      await loginPage.realizarLogout();
    });
    await test.step('Validar redirecionamento para página de login', async () => {
      await loginPage.validarRedirecionamentoParaLogin();
    });
  });

});