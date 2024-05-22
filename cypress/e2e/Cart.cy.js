import loginPage from "../support/pageObject/loginClass";
import cartPage from "../support/pageObject/cartClass";

describe("Add to Cart", () => {
  beforeEach(() => {
    cy.loginSession(1);
    cy.visit("", { responseTimeout: 120000 });
    cy.verify(loginPage.loginWelcome, "Welcome");
    cy.visit("https://magento.softwaretestingboard.com/checkout/cart/", { responseTimeout: 120000 } )
  });

  /*
    Negative Type Test
    TC-16 : Update Quantity Product Failed - Zero Quantity
  */
  it("Update Quantity Product Failed - Zero Quantity", () => {
    cy.get(cartPage.cartQty).clear().type('0')
    cartPage.clickUpdate()
    cy.verify(cartPage.errorQty, 'Please enter a number greater than 0 in this field')
  });

  /*
    Positive Type Test
    TC-17 : Checkout Success
  */
  it.only("Update to Checkout Page Success", () => {
    cy.get(cartPage.delete).click()
    cartPage.clickUpdate()
    cy.wait(200)
    
    cy.get('.mark > strong', { timeout: 10000 }).should('be.visible');
    cy.get(cartPage.coBtn).click({force : true})
    cy.wait(100)
    cy.get('#shipping > .step-title', { timeout: 10000 }).should('be.visible');
    cy.urlVerify('/checkout/#shipping')
    cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
    cy.get('.button').click()
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
    cy.verify('.base', 'Thank you for your purchase')
  });
});
