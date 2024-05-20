import loginPage from "../support/pageObject/loginClass";

describe("Login", () => {
  function randomWords() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const email = randomString;
    return email;
  }

  let userEmail = randomWords() + "@gmail.com";
  let random = randomWords();

  beforeEach(() => {
    cy.clearCookies();
    cy.visit("");
    cy.get(loginPage.signIn).click();
    cy.wait(200);
    cy.urlVerify("/customer/account/login/");
  });

  /*
    Negative Type Test
    TC-6 : Invalid email format
  */
  it("Login failed - Invalid Email", () => {
    cy.inputLogin(random, "Ayudia123");
    cy.verify(
      loginPage.emailError,
      "Please enter a valid email address (Ex: johndoe@domain.com)"
    );
  });

  /*
    Negative Type Test
    TC-7 : Wrong email & password
  */
  it("Login failed - Invalid Email and Password", () => {
    cy.inputLogin(userEmail, random);
    cy.verify(
      loginPage.alertPass,
      "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later"
    );
  });

  /*
    Positive Type Test
    TC-8 : Login Success
  */
  it.only("Login success", () => {
    cy.loginSession(0);
  });
});
