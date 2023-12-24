/// <reference types="cypress" />

describe("Teste para Home", () => {
  it("Deve renderizar 3 contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.get(".cTVgex li:first-child").should("have.length", 3);
  });
});
