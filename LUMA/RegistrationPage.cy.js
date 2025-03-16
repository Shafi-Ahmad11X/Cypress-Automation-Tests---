describe('Registration in LUMA', () => {
  it('Register new user', () => {

    //visit LUMA Website
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.screenshot('1.LUMA Home Page')
    //Click on "Create new Account" button
    cy.get('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a').click()
    cy.screenshot('2.Registration Page')

    //Fill the form
    cy.get('#firstname', {timeout:10000}).should('be.visible').type('Nancy');
    cy.get('#lastname').type('Strong');
    cy.get('#email_address').type('nancystrong@gmail.com');
    cy.get('#password').type('123ABCabc');
    cy.get('#password-confirmation').type('123ABCabc');
    cy.get('button[title="Create an Account"]')
    .click({force:true});

    //Confirmation
    cy.url().should('include','/customer/account')
    cy.get('.message-success > div')
    cy.screenshot('3.Registration Successfull')

  })

})


