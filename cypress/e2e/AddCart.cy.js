import loginPage from "../support/pageObject/loginClass";
import cartPage from "../support/pageObject/cartClass";

describe("Add to Cart", () => {
  beforeEach(() => {
    cy.loginSession(1);
    cy.visit("", { responseTimeout: 120000 });
    cy.verify(loginPage.loginWelcome, "Welcome");
    cartPage.openPage();
  });

  /*
    Negative Type Test
    TC-14 : Size not selected
  */
  it("Add Cart Failed - Invalid Size", () => {
    cy.get(cartPage.hoodies).click();
    cy.get(cartPage.product1).click();
    cy.get(cartPage.color1).click();
    cartPage.clickAdd();
    cy.wait(100);
    cy.verify(cartPage.size1Error, "This is a required field");
  });

  /*
    Positive Type Test
    TC-13 : Add Cart Success
  */
  it("Add Cart Hoodie Success", () => {
    cy.get(cartPage.hoodies).click();
    cy.get(cartPage.product1).click();
    cy.get(cartPage.size1).click();
    cy.get(cartPage.color1).click();
    cy.get(cartPage.qty).clear().type("3");
    cartPage.clickAdd();
    cy.verify(
      cartPage.alertElement,
      "You added Daphne Full-Zip Hoodie to your shopping cart"
    );
  });
  // Add another product
  it.only("Add Cart Pants Success", () => {
    cy.get(cartPage.pants).click();
    cy.get(cartPage.product2).click();
    cy.get(cartPage.size2).click();
    cy.get(cartPage.color2).click();
    cy.get(cartPage.qty).clear().type("2");
    cartPage.clickAdd();
    cy.verify(
      cartPage.alertElement,
      "You added Ida Workout Parachute Pant to your shopping cart"
    );
  });
});
