describe('Sign In', () => {
  it('User Sign In', () => {
    //visit the site
    cy.visit('https://magento.softwaretestingboard.com/')

    //click to the SignIn button
    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a')
    .click()

    cy.get('#email')
    .type('nancystrong@gmail.com')

    cy.get('#pass')
    .type('123ABCabc')

    //Sign In button
    cy.get('#send2')
    .click()

    //logIn confirmation
    cy.get('.logged-in')
    .should('contain.text', "Welcome, Nancy Strong!")

    //SigningOut
    //click to dropdown button
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action')
    .click()
    //click to sign out button
    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome.active > div > ul > li.authorization-link > a')
    .click()

    //confirmaton
    cy.get('.base')
    .should('contain.text', "You are signed out")

  })
})