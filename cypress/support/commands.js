import registrationPage from '../support/pageObject/registrationClass'
import loginPage from '../support/pageObject/loginClass'

//Check URL
Cypress.Commands.add('urlVerify', (url) => {
    cy.url().should('include', url)
})

//Input Registrasi
Cypress.Commands.add('inputRegistrasi', (firstName, lastName, email, pass, cpass, error, text) => {
    registrationPage.inputFirstName(firstName)
    registrationPage.inputLastName(lastName)
    registrationPage.inputEmail(email)
    registrationPage.inputPass(pass)
    registrationPage.inputCpass(cpass)
    registrationPage.clickRegister()
    cy.get(error).should('be.visible')
    cy.get(error).should('contain.text', text)
})

//Input Login
Cypress.Commands.add('inputLogin', (email, pass) => {
    loginPage.inputEmail(email)
    loginPage.inputPass(pass)
    loginPage.clickLogin()
    // cy.get(error).should('be.visible')
    // cy.get(error).should('contain.text', text)
})

Cypress.Commands.add('verifyLogin', (alert, text) => {
    loginPage.verifyError(alert, text)
})

// Cypress.Commands.add('verifyPass', (alert) => {
//     loginPage.verifyError(loginPage.passError, alert)
// })


