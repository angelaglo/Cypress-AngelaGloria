class loginPage {
    signIn = '.panel > .header > .authorization-link > a'
    btnLogin = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    email = '#email'
    pass = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    emailError = '#email-error'
    passError = '#pass-error'
    alertPass = '.message-error > div'
    loginWelcome = ':nth-child(2) > .greet > .logged-in'

    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }

    inputPass(pass){
        cy.get(this.pass).clear().type(pass)
    }

    verifyError(error,text){
        cy.get(error).should('be.visible')
        cy.get(error).should('contain.text', text)
    }

    clickLogin(){
        cy.get(this.btnLogin).click()
    }
}
export default new loginPage()