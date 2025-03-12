
require('cypress-downloadfile/lib/downloadFileCommand')

describe('file download', function() {
  it('download the file', function () {
    cy.downloadFile('https://library.concordia.ca/help/technology/recovering_saved_files.pdf','Download','demo.pdf')
  })
})