describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.eight25media.com/')
    cy.title().should('include', 'eight25')

    cy.contains('Work').click()
    cy.contains('Our Work').should('be.visible')

    


  })
})