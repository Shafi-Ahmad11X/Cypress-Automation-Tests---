describe('mysuite', () => {
  it('Capture Screenshot & Videos', () => {
    cy.visit("https://google.com/");

    cy.screenshot('homepage');
    cy.wait(5000);
    cy.get("img[.lnXdpd']").screenshot("logo");


    
    //Automatically capture screenshot & Video on failure - only when it execute through CLI
    cy.get('.lnXdpd').click(); //cameras
    cy.get("div[id='content'] h2").should('have.text',"tablets");
  })
})