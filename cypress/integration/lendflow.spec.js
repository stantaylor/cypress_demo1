Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('lendflow registration', () => {
  beforeEach(() => {
    cy.visit('https://app.lendflow.com/register')
  })

  it('displays the registration page', () => {
    cy.contains('Create your Lendflow account').should('exist')
    cy.get('input[name=first_name]').should('exist')

  })

  it('completes the account registration', () => {

    cy.get('input[name=first_name]').type('John')
    cy.get('input[name=last_name]').type('Doe')
    cy.get('input[name=company_name]').type('Doe Corp')
    cy.get('input[name=company_website]').type('www.doecorp.com')
    cy.get('input[name=phone]').type('2125551212')
    cy.get('input[name=password]').type('G0Ziw#dbZP7G')
    cy.get('input[name=password_confirmation]').type('G0Ziw#dbZP7G')

    /* 
     I have no idea how to get around the production captcha. It's designed 
     explicitly to be robot-proof; I did some research and found that 
     you can use captcha in test mode in your test/dev environment, and
     I found plenty of discussion and code snippets for working with 
     captcha. It looks like you can also stub out captcha, but that
     will take me more time to figure out than I can commit to tonight
     for a coding exercise for a job application
    */

    // For now, let's assume that you've satisfied captcha
    // This test will fail now because I am not satisfying captcha

    cy.get('button[type=submit').should('be.enabled')
    cy.click('button[type=submit')

    // verify that the registration was successful
    cy.contains('Thank you for registering with Lendflow').should('exist')

  })

})
