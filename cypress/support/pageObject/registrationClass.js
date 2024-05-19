class registrationPage {
    createAccount = '.panel > .header > :nth-child(3) > a'
    btnRegister = '#form-validate > .actions-toolbar > div.primary > .action > span'
    
    firstName = '#firstname'
    lastName = '#lastname'
    email = '#email_address'
    pass = '#password'
    cpass = '#password-confirmation'

    inputFirstName(firstName){
        cy.get(this.firstName).clear().type(firstName)
    }

    inputLastName(lastName){
        cy.get(this.lastName).clear().type(lastName)
    }

    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }

    inputPass(pass){
        cy.get(this.pass).clear().type(pass)
    }

    inputCpass(cpass){
        cy.get(this.cpass).clear().type(cpass)
    }

    clickRegister(){
        cy.get(this.btnRegister).click()
    }
}
export default new registrationPage()