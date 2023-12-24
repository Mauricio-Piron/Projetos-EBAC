/// <reference types="cypress" />

describe("Teste para adicao de um novo contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Removendo contato", () => {
    cy.get(".sc-iAEyYk").contains("José Maurício Piron");
    cy.get(":nth-child(5) > .sc-gueYoa > .delete").first().click();
    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Contato Removido com sucesso");
    });
    cy.screenshot("Contato Removido");
  });
});
