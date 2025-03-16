describe('1-Test', () => {
  it('Visits the Kitchen Sink & execute commands', () => {
    //Visit a web page.
    cy.visit('https://example.cypress.io')
    cy.wait(500)
    cy.screenshot('1-home page')

    //Interact with that element.
    //Query for an element.
    cy.contains('type').click()
    cy.wait(500)
    cy.screenshot('1-click')

    //Assert about the content on the page.
    //Make an assertion
    //Should be on a new URL which
    //includes '/commands/actions'
    cy.url().should('include','/commands/actions')
    cy.wait(500)
    cy.screenshot('1-assertion')

    //Get an input, type into it
    cy.get('.action-email').type('fake@gmail.com')
    cy.wait(500)
    cy.screenshot('1-input')

    //varify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@gmail.com')
    cy.wait(500)
    cy.screenshot('1-updated value')

  })
})



