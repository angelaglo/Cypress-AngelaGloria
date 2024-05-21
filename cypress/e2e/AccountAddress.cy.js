import loginPage from "../support/pageObject/loginClass";
import accountAddressPage from "../support/pageObject/accountAddressClass";

describe("Account Address", () => {
  beforeEach(() => {
    cy.loginSession(1);
    cy.visit("", { responseTimeout: 120000 });
    cy.verify(loginPage.loginWelcome, "Welcome");
    accountAddressPage.openPage();
  });

  /*
    Negative Type Test
    TC-12 : Empty city field
  */
  it("Save Failed - Invalid City", () => {
    cy.inputAddress();
    cy.get(accountAddressPage.city).clear();
    accountAddressPage.clickSave();
    cy.verify(accountAddressPage.errorCity, "This is a required field");
  });

  /*
    Positive Type Test
    TC-13 : Save Address Success
  */
  it("Save Success", () => {
    cy.inputAddress();
    accountAddressPage.clickSave();
    cy.verify(accountAddressPage.alertElement, "You saved the address")
  });
});
