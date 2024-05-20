class accountInformationPage {
    dropdownBtn = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    selectedMenu = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
    menu = ':nth-child(7) > a'
    lastName = '#lastname'
    lastNameError = '#lastname-error'
    saveBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    radioEmail = '#change-email'
    radioPass = '#change-password'
    email = '#email'
    cpass = '#current-password'
    errorElement = '.message-error > div'
    pass = '#password'
    cnpass = '#password-confirmation'
    alertElement = '.message-success > div'

    openPage(){
        cy.get(this.dropdownBtn).click()
        cy.get(this.selectedMenu).should('be.visible')
        cy.get(this.selectedMenu).click()
        cy.get(this.menu).click()
    }

    clickSave(){
        cy.get(this.saveBtn).click()
    }
}
export default new accountInformationPage()