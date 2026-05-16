import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // ─── Seletores ────────────────────────────────────────────────────────────
  readonly campoUsername: Locator;
  readonly campoSenha: Locator;
  readonly botaoLogin: Locator;
  readonly mensagemErro: Locator;
  readonly containerProdutos: Locator;
  readonly botaoMenu: Locator;
  readonly botaoLogout: Locator;

  constructor(page: Page) {
    this.page = page;

    this.campoUsername     = page.locator('[data-test="username"]');
    this.campoSenha        = page.locator('[data-test="password"]');
    this.botaoLogin        = page.locator('[data-test="login-button"]');
    this.mensagemErro      = page.locator('.error-message-container');
    this.containerProdutos = page.locator('[data-test="inventory-list"]');
    this.botaoMenu         = page.locator('#react-burger-menu-btn');
    this.botaoLogout       = page.locator('[data-test="logout-sidebar-link"]');
  }

  // ─── Ações ────────────────────────────────────────────────────────────────

  async acessarPaginaDeLogin() {
    await this.page.goto('/');
  }

  async preencherUsername(usuario: string) {
    await this.campoUsername.fill(usuario);
  }

  async preencherSenha(senha: string) {
    await this.campoSenha.fill(senha);
  }

  async clicarBotaoLogin() {
    await this.botaoLogin.click();
  }

  async realizarLogin(usuario: string, senha: string) {
    await this.preencherUsername(usuario);
    await this.preencherSenha(senha);
    await this.clicarBotaoLogin();
  }

  async realizarLogout() {
    await this.botaoMenu.click();
    await this.botaoLogout.click();
  }

  // ─── Asserções ────────────────────────────────────────────────────────────

  async validarPaginaDeProdutosCarregada() {
    await expect(this.containerProdutos).toBeVisible();
  }

  async validarMensagemDeErro(mensagemEsperada: string) {
    await expect(this.mensagemErro).toBeVisible();
    await expect(this.mensagemErro).toContainText(mensagemEsperada);
  }

  async validarRedirecionamentoParaLogin() {
    await expect(this.campoUsername).toBeVisible();
    await expect(this.campoSenha).toBeVisible();
    await expect(this.botaoLogin).toBeVisible();
  }
}