/// <reference types="cypress" />
describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("initial render", () => {
    cy.get('[data-cy="step-1"]').should("have.class", "bg-blue-100");
    cy.get('[data-cy="title"]').should("have.text", "Personal info");
    cy.get('[data-cy="description"]').should("exist");
    cy.get("form input").should("have.length", 3);
    cy.get("input").siblings().eq(0).should("have.text", "Name");
    cy.get("input").siblings().eq(1).should("have.text", "Email Address");
    cy.get("input").siblings().eq(2).should("have.text", "Phone Number");
    cy.get("button").should("have.text", "Next Step");
  });
  it("should validate form before letting pass to next step", () => {
    cy.get("button").click();
    cy.get('[data-cy="error"]').should("be.visible");
    cy.get("label").contains("Name").siblings().type("Waldemar Glaz");
    cy.get("label").contains("Email").siblings().type("waldemarglaz@gmail.com");
    cy.get("label")
      .contains("Phone Number")
      .siblings()
      .type("+44668654234{enter}");
    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:5173/plan");
    });
  });
});
