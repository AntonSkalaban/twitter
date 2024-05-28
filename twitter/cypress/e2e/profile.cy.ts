/// <reference types="cypress" />

const userName = "Anton Test";
const userPhone = "99999999999";
const userPassword = "password";
const twitterTitle = "hello twitter!";

describe("Profile", () => {
  it("should render the create tweet form", () => {
    cy.visit("/login");
    cy.get('[data-testid="emailOrPhone"]').type(userPhone);
    cy.get('[data-testid="password"]').type(userPassword);
    cy.get("button").click();
    cy.contains(userName);

    const textarea = cy.get("textarea");
    textarea.type(twitterTitle);
    textarea.should("have.value", twitterTitle);
    cy.get('[data-testid="create-tweet-btn"]').click();
    textarea.should("have.value", "");
  });
});
