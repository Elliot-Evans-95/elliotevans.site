/// <reference types="Cypress" />

it('works', () =>
  cy.wrap('foo').should('equal', 'foo'));
