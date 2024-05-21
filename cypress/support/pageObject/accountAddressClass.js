class accountAddressPage {
    dropdownBtn = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    selectedMenu = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'
    menu = '.items > :nth-child(6) > a'
    saveBtn = '#form-validate > .actions-toolbar > div.primary > .action > span'
    firstName = '#firstname'
    lastName = '#lastname'
    company = '#company'
    phoneNo = '#telephone'
    stAddr1 = '#street_1'
    stAddr2 = '#street_2'
    stAddr3 = '#street_3'
    city = '#city'
    errorCity = '#city-error'
    province = '#region_id'
    zipCode = '#zip'
    country = '#country'
    alertElement = '.message-success > div'

    openPage(){
        cy.get(this.dropdownBtn).click()
        cy.get(this.selectedMenu).should('be.visible')
        cy.get(this.selectedMenu).click()
        cy.get(this.menu).click()
    }

    inputFirstName(firstName){
        cy.get(this.firstName).click()
        cy.get(this.firstName).clear().type(firstName)
    }

    inputLastName(lastName){
        cy.get(this.lastName).clear().type(lastName)
    }

    inputCompany(company){
        cy.get(this.company).clear().type(company)
    }

    inputPhoneNo(phoneNo){
        cy.get(this.phoneNo).clear().type(phoneNo)
    }

    inputAddr1(stAddr1){
        cy.get(this.stAddr1).clear().type(stAddr1)
    }

    inputAddr2(stAddr2){
        cy.get(this.stAddr2).clear().type(stAddr2)
    }

    inputAddr3(stAddr3){
        cy.get(this.stAddr3).clear().type(stAddr3)
    }

    inputAddr3(stAddr3){
        cy.get(this.stAddr3).clear().type(stAddr3)
    }

    inputCity(city){
        cy.get(this.city).clear().type(city)
    }

    inputProvince(province, value){
        cy.get(this.province).select(province).should('have.value', value)
    }

    inputZip(zipCode){
        cy.get(this.zipCode).clear().type(zipCode)
    }

    clickSave(){
        cy.get(this.saveBtn).click()
    }
}

export default new accountAddressPage()