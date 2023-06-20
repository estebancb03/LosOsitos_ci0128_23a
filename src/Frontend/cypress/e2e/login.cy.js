/// <reference types="cypress" />

describe("<Login />", () => {
  it("Verify login page", () => {
    cy.viewport(1920, 1080);
    cy.visit("/login");
    cy.contains("span", "Log In");
    cy.get("[data-cy=title]").invoke("text").should("equal", "Log In");
  });

  it("Verify login form", () => {
    // cy.viewport(1920, 1080);
    cy.visit("/login");
    cy.get("[data-cy=login-form]").should("exist");
    cy.get("[data-cy=username-input]").should("exist");
    cy.get("[data-cy=password-input]")
      .should("exist")
      .should("have.prop", "type")
      .should("equal", "password")
    cy.get("[data-cy=submit-button]")
      .should("exist")
      .should("have.text", "Log In");
  });

  it("User login process", () => {
    // cy.viewport(1920, 1080);
    cy.visit("/login");
    cy.get("[data-cy=username-input]").type("estebancb");
    cy.get("[data-cy=password-input]").type("estebancb");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=hamburger-menu-button]").click();
    cy.get("[data-cy=hamburger-menu-button]").click();
  });
});
