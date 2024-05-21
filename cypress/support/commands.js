import registrationPage from "../support/pageObject/registrationClass";
import loginPage from "../support/pageObject/loginClass";
import accountInformationPage from "../support/pageObject/accountInformationClass";
import accountAddressPage from "../support/pageObject/accountAddressClass";

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
        cy.visit("", { responseTimeout: 120000 });
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

//Input Address
Cypress.Commands.add("inputAddress", () => {
  cy.fixture("addressData.json").then((address) => {
    const userdata = address.valid;
    accountAddressPage.inputFirstName(userdata.firstName);
    accountAddressPage.inputLastName(userdata.lastName);
    accountAddressPage.inputCompany(userdata.company);
    accountAddressPage.inputPhoneNo(userdata.phoneNo);
    accountAddressPage.inputAddr1(userdata.street1);
    accountAddressPage.inputAddr2(userdata.street2);
    accountAddressPage.inputAddr3(userdata.street3);
    accountAddressPage.inputCity(userdata.city);
    accountAddressPage.inputProvince(userdata.province, userdata.value);
    accountAddressPage.inputZip(userdata.zip);
  });
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
