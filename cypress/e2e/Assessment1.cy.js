describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.eight25media.com/lets-talk/')
    cy.get('input[name="your-name"]').type('Test User') // check if input name attribute is "name"
    cy.get('input[name="your-email"]').type('testuser@example.com') // check if input name attribute is "email"
    cy.get('textarea[name="your-message"]').type('This is a test message') // check if textarea name attribute is "message"
    cy.get('input[name="your-name"]').should('have.value', 'Test User')
    cy.get('input[name="your-email"]').should('have.value', 'testuser@example.com')
    cy.get('textarea[name="your-message"]').should('have.value', 'This is a test message')

  })
})