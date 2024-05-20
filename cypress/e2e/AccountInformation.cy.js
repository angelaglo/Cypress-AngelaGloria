import loginPage from "../support/pageObject/loginClass";
import accountInformationPage from "../support/pageObject/accountInformationClass";

describe("Login", () => {
  beforeEach(() => {
    cy.loginSession(0);
    cy.visit("");
    cy.verify(loginPage.loginWelcome, "Welcome");
    accountInformationPage.openPage();
  });

  /*
    Negative Type Test
    TC-9 : Invalid last name -> delete last name
  */
  it("Save failed - Invalid Last Name", () => {
    cy.get(accountInformationPage.lastName).clear();
    accountInformationPage.clickSave();
    cy.verify(accountInformationPage.lastNameError, "This is a required field");
  });

  /*
    Negative Type Test
    TC-10 : Updated Email Existed
  */
  it("Save failed - Invalid Email", () => {
    cy.get(accountInformationPage.radioEmail).click();
    cy.input(accountInformationPage.email, "testX@gmail.com");
    cy.input(accountInformationPage.cpass, "Ayudia123");
    accountInformationPage.clickSave();
  });

  /*
    Positive Type Test
    TC-11 : Save Success
  */
  it("Save Success", () => {
    cy.inputAcc()
    cy.loginSession(1)
  });
});
