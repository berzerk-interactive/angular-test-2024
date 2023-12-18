describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
  })
  it('has hello', () => {
    cy.visit('/')
    cy.contains('Hello').should('exist')
  })
})
