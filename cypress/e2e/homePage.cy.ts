/// <reference types="cypress" />
describe('Home Page', () => {
  it('initial render', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="step-1"]').should('have.class', 'bg-blue-100')
    cy.get('h1').should('have.text', 'Personal info')
    cy.get('form input').should('have.length', 3)
    cy.get('input').siblings().eq(0).should('have.text', 'Name')
    cy.get('input').siblings().eq(1).should('have.text', 'Email Address')
    cy.get('input').siblings().eq(2).should('have.text', 'Phone Number')
    cy.get('button').should('have.text', 'Next Step')
  })
})
