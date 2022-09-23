/// <reference types="cypress" />

context('Purchase Items Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Purchase items', () => {

    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=cart-list-btn]').click();

    cy.get('[data-cy=purchase-btn]').click();

    cy.get('.MuiBackdrop-root').click({ force: true });

    cy.get('[data-cy=purchases-list-btn]').click();

    cy.get('[data-cy=purchase-list]').children().should('have.length', '2');

  })

})
