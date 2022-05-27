describe('Mon premier test', () => {
  it('Comparaison boolean avec boolean true = true', () => {
    expect(true).to.equal(true)
  })

  it('a should be 2', () => {
    let a = 2
    expect(a).to.equal(2)
  })

  // it('Visits the Kitchen Sink', () => {
  //   cy.visit('https://example.cypress.io')

  //   cy.contains('type').click()

  //   // Should be on a new URL which includes '/commands/actions'
  //   cy.url().should('include', '/commands/actions')

  //   // Get an input, type into it and verify that the value has been updated
  //   cy.get('.action-email')
  //   .type('contact@isett.rnu.tn')
  //   .should('have.value', 'contact@isett.rnu.tn')
  // })

    it('Visits Mean Stack Test', () => {
    cy.visit('https://mean-iset.herokuapp.com/')

    cy.contains('Add Etudiant').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/etudiantAdd')

    // Get an input, type into it and verify that the value has been updated
    cy.get('input[name=nom]')
    .type('Salah Tozri')
    .should('have.value', 'Salah Tozri')

    cy.get('input[name=email]')
    .type('salah@gmail.com')
    .should('have.value', 'salah@gmail.com')

    cy.get('input[name=dateNais]')
    .clear()
    .type('08/26/1998')
    .should('have.value', '08/26/1998')

    cy.get('button[type=submit]').click()

  })
})
