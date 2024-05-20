import registrationPage from "../support/pageObject/registrationClass";
import loginPage from "../support/pageObject/loginClass";
import accountInformationPage from "../support/pageObject/accountInformationClass";

//Check URL
Cypress.Commands.add("urlVerify", (url) => {
  cy.url().should("include", url);
});

//Input Registrasi
Cypress.Commands.add(
  "inputRegistrasi",
  (firstName, lastName, email, pass, cpass, error, text) => {
    registrationPage.inputFirstName(firstName);
    registrationPage.inputLastName(lastName);
    registrationPage.inputEmail(email);
    registrationPage.inputPass(pass);
    registrationPage.inputCpass(cpass);
    registrationPage.clickRegister();
    cy.get(error).should("be.visible");
    cy.get(error).should("contain.text", text);
  }
);

//Input Login
Cypress.Commands.add("inputLogin", (email, pass) => {
  loginPage.inputEmail(email);
  loginPage.inputPass(pass);
  loginPage.clickLogin();
});

//Login before session
Cypress.Commands.add("loginSession", (i) => {
  cy.fixture("loginData.json").then((users) => {
    const userdata = users[i];
    cy.session(
        "login",
        () => {
          cy.visit("");
          cy.get(loginPage.signIn).click();
          cy.wait(200);
          cy.urlVerify("/customer/account/login/");
          loginPage.inputEmail(userdata.email);
          loginPage.inputPass(userdata.passw);
          loginPage.clickLogin();
    
          cy.verify(loginPage.loginWelcome, "Welcome");
        },
        {
          cacheAcrossSpecs: true,
        }
      );
  });
});

//Update Acc Information
Cypress.Commands.add("inputAcc", () => {
    cy.get(accountInformationPage.radioEmail).click();
    cy.get(accountInformationPage.radioPass).click();
    cy.fixture("loginData.json").then((users) => {
      const userdata0 = users[0];
      const userdata1 = users[1];
      cy.input(accountInformationPage.email, userdata1.email);
      cy.input(accountInformationPage.cpass, userdata0.passw);
      cy.input(accountInformationPage.pass, userdata1.passw);
      cy.input(accountInformationPage.cnpass, userdata1.passw);
    });
    accountInformationPage.clickSave();
    cy.verify(
      accountInformationPage.alertElement,
      "You saved the account information"
    );
});

Cypress.Commands.add("verify", (alert, text) => {
  cy.get(alert).should("be.visible");
  cy.get(alert).should("contain.text", text);
});

Cypress.Commands.add("input", (element, text) => {
  cy.get(element).should("be.visible");
  cy.get(element).clear().type(text);
});

//openAccountInformation
// Cypress.Commands.add("pickDropdown", () => {
//     accountInformationPage.
// })
