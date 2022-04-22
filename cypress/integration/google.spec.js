Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Google search', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('displays the Google search page', () => {
    cy.get('input[name=q]').should('exist')

  })

  it('searches for newest programming langauge', () => {

    cy.get('input[name=q]').click().type('newest programming language')
    cy.get('input.gNO89b').eq(0).click()
    // cy.get('div.y6Uyqe').find('a').eq(2).should('contain')


    // just for fun, let's just get the list of 'related search terms' objects
    cy.get('.s75CSd').should(($lis) => {
      expect($lis, 'related search list').to.have.length(8)
      expect($lis.eq(2), 'third search term').to.contain('last programming language')
    })

    // click on the third link with class k8XOCe
    cy.get('a.k8XOCe').eq(2).click();
    cy.title().should('contain', 'Last programming language')

  })

})
