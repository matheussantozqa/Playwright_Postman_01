import { Page, Locator, expect } from '@playwright/test';

export class NavegacaoPaginasPage {
  readonly page: Page;

  // ─── Seletores ────────────────────────────────────────────────────────────
  readonly botaoMenu: Locator;
  readonly botaoxmenu: Locator;
  readonly menuItemAllItems: Locator;
  readonly menuItemAbout: Locator;
  readonly menuItemResetAppState: Locator;
  readonly containerProdutos: Locator;
  readonly contadorCarrinho: Locator;
  readonly botaoAddToCart: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoMenu              = page.locator('#react-burger-menu-btn');
    this.botaoxmenu              = page.locator('#react-burger-cross-btn');
    this.menuItemAllItems       = page.locator('[data-test="inventory-sidebar-link"]');
    this.menuItemAbout          = page.locator('[data-test="about-sidebar-link"]');
    this.menuItemResetAppState  = page.locator('[data-test="reset-sidebar-link"]');
    this.containerProdutos      = page.locator('[data-test="inventory-container"]');
    this.contadorCarrinho       = page.locator('[data-test="shopping-cart-badge"]');
    this.botaoAddToCart         = page.locator('.btn');
  }

  // ─── Ações ────────────────────────────────────────────────────────────────

  async adicionarPrimeiroItemAoCarrinho() {
    await this.botaoAddToCart.first().click();
  }

  async abrirMenu() {
    await this.botaoMenu.click();
  }

  async clicarAllItems() {
    await this.menuItemAllItems.click();
    await this.botaoxmenu.click(); 
  }

  async clicarAbout() {
    await this.menuItemAbout.click();    
  }

  async clicarResetAppState() {
    await this.menuItemResetAppState.click();
  }

  // ─── Asserções ────────────────────────────────────────────────────────────

  async validarPaginaDeProdutosCarregada() {
    await expect(this.containerProdutos).toBeVisible();
  }

  async validarPaginaAboutCarregada() {
    await expect(this.page).toHaveURL(/saucelabs\.com/);
  }

  async goBack() {
    await this.page.goBack();
}

  async validarCarrinhoResetado() {
    await expect(this.contadorCarrinho).not.toBeVisible();
  }
}