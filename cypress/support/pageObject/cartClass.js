class cartPage {
  mainMenu = "#ui-id-3 > span";
  hoodies = ".categories-menu > :nth-child(2) > :nth-child(1) > a";
  product1 =
    ":nth-child(7) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo";
  size1 = "#option-label-size-143-item-168";
  size1Error = ".mage-error";
  color1 = "#option-label-color-93-item-57";
  qty = "#qty";
  addBtn = "#product-addtocart-button > span";
  alertElement = ".message-success > div";

  pants = ":nth-child(2) > :nth-child(5) > a";
  product2 =
    ":nth-child(11) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo";
  size2 = "#option-label-size-143-item-171";
  color2 = "#option-label-color-93-item-57";

  cartBtn = ".minicart-wrapper"
  cartQty = '#cart-70758-qty'
  updateShopCart = '.update > span'
  updateColor = '#option-label-color-93-item-49'
  updateCart = '#product-updatecart-button'
  errorQty = '#cart-70758-qty-error'
  viewCart = ':nth-child(7) > .secondary > .action > span'
  delete = ':nth-child(3) > .item-actions > td > .actions-toolbar > .action-delete'
  coBtn = '.methods > :nth-child(1) > .action'


  openPage() {
    cy.get(this.mainMenu).click();
  }

  openCart() {
    cy.get(this.cartBtn).click();
  }

  clickAdd() {
    cy.get(this.addBtn).click();
  }

  clickUpdate() {
    cy.get(this.updateShopCart).click();
  }
}

export default new cartPage();
