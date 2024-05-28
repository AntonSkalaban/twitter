/// <reference types="cypress" />

const randomEmail = "anton12@mail.ru";
const randomPpassword = "123123adawd";
const wrongEmailOrNumver = "1221d12213";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("should render the login form", () => {
    cy.get('[data-testid="emailOrPhone"]').should("exist");
    cy.get('[data-testid="password"]').should("exist");
    cy.get("button").should("have.text", "Log in");
  });

  it("should display error message when email or number wrong", () => {
    cy.get('[data-testid="emailOrPhone"]')
      .type(wrongEmailOrNumver)
      .should("have.value", wrongEmailOrNumver);

    cy.get("button").click();
    cy.contains("Should contain email or phone");

    cy.get("button").click();
    cy.contains("Required");
  });

  it("should send request and return error", () => {
    cy.get('[data-testid="emailOrPhone"]').type(randomEmail).should("have.value", randomEmail);

    cy.get('[data-testid="password"]').type(randomPpassword);

    const btn = cy.get("button");
    btn.contains("Log in");

    btn.click();
    btn.contains("Fetching...");

    cy.get("button").contains("Log in");
    cy.contains(" Firebase: Error (auth/invalid-credential).");
  });
});
