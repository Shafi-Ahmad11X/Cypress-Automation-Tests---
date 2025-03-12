describe('upload the file', () => {
  it('upload the file and assert the name if the file uploaded', function()  {
    
    const filepath = 'CRIS.jpg';
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile(filepath);
    cy.get('#file-submit').click();
    cy.get('#uploaded-files').contains('CRIS.jpg')
  });
});