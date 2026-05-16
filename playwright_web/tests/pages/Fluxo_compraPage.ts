import { Page, Locator, expect } from '@playwright/test';

export class CompraPage {
  readonly page: Page;

  // ─── Seletores ────────────────────────────────────────────────────────────
  readonly botaoAddToCart: Locator;
  readonly botaoCarrinho: Locator;
  readonly botaoCheckout: Locator;
  readonly campoFirstName: Locator;
  readonly campoLastName: Locator;
  readonly campoZipCode: Locator;
  readonly botaoContinue: Locator;
  readonly botaoFinish: Locator;
  readonly mensagemConfirmacao: Locator;
  readonly botaoRemoverItem: Locator;
  readonly contadorCarrinho: Locator;
  readonly itensNoCarrinho: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoAddToCart      = page.locator('.btn');
    this.botaoCarrinho       = page.locator('[data-test="shopping-cart-link"]');
    this.botaoCheckout       = page.locator('[data-test="checkout"]');
    this.campoFirstName      = page.locator('[placeholder="First Name"]');
    this.campoLastName       = page.locator('[placeholder="Last Name"]');
    this.campoZipCode        = page.locator('[placeholder="Zip/Postal Code"]');
    this.botaoContinue       = page.locator('[data-test="continue"]');
    this.botaoFinish         = page.locator('[data-test="finish"]');
    this.mensagemConfirmacao = page.locator('[data-test="checkout-complete-container"]');
    this.botaoRemoverItem    = page.locator('.btn');
    this.contadorCarrinho    = page.locator('[data-test="shopping-cart-badge"]');
    this.itensNoCarrinho     = page.locator('[data-test="inventory-item"]');
  }

  // ─── Ações ────────────────────────────────────────────────────────────────

  async adicionarPrimeiroItemAoCarrinho() {
    await this.botaoAddToCart.first().click();
  }

  async adicionarMultiplosItensAoCarrinho(quantidade: number) {
    const botoes = this.botaoAddToCart;
    for (let i = 0; i < quantidade; i++) {
      await botoes.nth(i).click();
    }
  }

  async navegarParaCarrinho() {
    await this.botaoCarrinho.click();
  }

  async clicarCheckout() {
    await this.botaoCheckout.click();
  }

  async preencherInformacoesDeEntrega(firstName: string, lastName: string, zipCode: string) {
    await this.campoFirstName.fill(firstName);
    await this.campoLastName.fill(lastName);
    await this.campoZipCode.fill(zipCode);
  }

  async clicarContinue() {
    await this.botaoContinue.click();
  }

  async clicarFinish() {
    await this.botaoFinish.click();
  }

  async removerItem(indice: number = 0) {
    await this.botaoRemoverItem.nth(indice).click();
  }

  async removerTodosOsItens(quantidade: number) {
    for (let i = 0; i < quantidade; i++) {
      await this.botaoRemoverItem.first().click();
    }
  }

  // ─── Asserções ────────────────────────────────────────────────────────────

  async validarConfirmacaoDeCompra() {
    await expect(this.mensagemConfirmacao).toBeVisible();
    await expect(this.mensagemConfirmacao).toContainText('Thank you for your order!Your order has been dispatched, and will arrive just as fast as the pony can get there!Back Home');
  }

  async validarCarrinhoVazio() {
    await expect(this.itensNoCarrinho).toHaveCount(0);
  }

  async validarContadorCarrinho(quantidade: number) {
    if (quantidade === 0) {
      await expect(this.contadorCarrinho).not.toBeVisible();
    } else {
      await expect(this.contadorCarrinho).toHaveText(String(quantidade));
    }
  }
}