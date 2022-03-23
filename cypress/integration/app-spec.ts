// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("should find the 1st input and type marc", function () {
    cy.get("input").first().type("marc").should("have.value", "marc");
    cy.get("input").last().type("1234").should("have.value", "1234");
  });

  it("should find the 2nd input and type 1234", function () {
    cy.get("button").click;
  });
});

export {};
