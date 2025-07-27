// cypress/e2e/activity_ranking.spec.js

describe("Activity Ranking UI", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows suggestions and fetches results for a valid city", () => {
    cy.get("input[placeholder='Enter city']").type("San");

    cy.contains("San Francisco, USA").click();

    cy.get(".ranking-card").should("have.length", 7);

    cy.get(".ranking-card").each(($card) => {
      cy.wrap($card).within(() => {
        cy.get(".activity-name").should("exist");
        cy.get(".rank").should("be.greaterThan", 0);
        cy.get(".reasoning").should("exist");
      });
    });
  });

  it("shows no suggestions for unknown text", () => {
    cy.get("input").type("Xyzabc");
    cy.get(".suggestions-list").should("not.exist");
  });

  it("handles invalid city error gracefully", () => {
    cy.get("input").type("InvalidCity123{enter}");
    cy.contains("City not found").should("be.visible");
  });
});
