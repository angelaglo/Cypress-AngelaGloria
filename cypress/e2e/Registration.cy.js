import registrationPage from '../support/pageObject/registrationClass'

describe('Registration', () => {
  beforeEach(()=>{
    cy.visit('')
    cy.get(registrationPage.createAccount).click()
    cy.wait(200)
    cy.urlVerify('/customer/account/create/')
  })

  /*
    Negative Type Test
    TC-1 : Invalid email format 
    TC-2 : Invalid password
    TC-3 : Invalid confirmation password
    TC-4 : Email already registered
  */
  it('Registration failed', () => {
    cy.fixture('registrationData.json').then((users) => {
      users.invalid.forEach((userdata) => {
        cy.inputRegistrasi(
          userdata.invalidFirstName, 
          userdata.invalidLastName, 
          userdata.invalidEmail,
          userdata.invalidPass,
          userdata.invalidCpass,
          userdata.errorElement,
          userdata.text)
      });
    })
  })

  /*
    Positive Type Test
    TC-5 : Registration success
  */
  it('Registration Success', () => {
    cy.fixture('registrationData.json').then((users) => {
      const userdata = users.valid
      cy.inputRegistrasi(
        userdata.firstName, 
        userdata.lastName, 
        userdata.email,
        userdata.pass,
        userdata.cpass,
        userdata.alertElement,
        userdata.text)
    })
  })
})