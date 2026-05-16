import { Page, Locator, expect } from '@playwright/test';

export class FiltroPage {
  readonly page: Page;

  // ─── Seletores ────────────────────────────────────────────────────────────
  readonly menuOrdenacao: Locator;
  readonly nomesDosProdutos: Locator;
  readonly precosDosProtudos: Locator;

  constructor(page: Page) {
    this.page = page;

    this.menuOrdenacao      = page.locator('[data-test="product-sort-container"]');
    this.nomesDosProdutos   = page.locator('[data-test="inventory-item-name"]');
    this.precosDosProtudos  = page.locator('[data-test="inventory-item-price"]');
  }

  // ─── Ações ────────────────────────────────────────────────────────────────

  async selecionarOrdenacao(opcao: string) {
    await this.menuOrdenacao.selectOption(opcao);
  }

  // ─── Asserções ────────────────────────────────────────────────────────────

  async validarOrdenacaoPorPrecoCrescente() {
    const precos = await this.precosDosProtudos.allTextContents();
    const valores = precos.map(p => parseFloat(p.replace('$', '')));
    const ordenado = [...valores].sort((a, b) => a - b);
    expect(valores).toEqual(ordenado);
  }

  async validarOrdenacaoPorPrecoDecrescente() {
    const precos = await this.precosDosProtudos.allTextContents();
    const valores = precos.map(p => parseFloat(p.replace('$', '')));
    const ordenado = [...valores].sort((a, b) => b - a);
    expect(valores).toEqual(ordenado);
  }

  async validarOrdenacaoPorNomeAZ() {
    const nomes = await this.nomesDosProdutos.allTextContents();
    const ordenado = [...nomes].sort((a, b) => a.localeCompare(b));
    expect(nomes).toEqual(ordenado);
  }

  async validarOrdenacaoPorNomeZA() {
    const nomes = await this.nomesDosProdutos.allTextContents();
    const ordenado = [...nomes].sort((a, b) => b.localeCompare(a));
    expect(nomes).toEqual(ordenado);
  }
}