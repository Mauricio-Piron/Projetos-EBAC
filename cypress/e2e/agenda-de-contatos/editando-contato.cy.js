/// <reference types="cypress" />

describe("Teste para edicao de um novo contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Entrando no campo de Edicao", () => {
    cy.get(".sc-iAEyYk").contains("José Maurício");
    cy.get(":nth-child(5) > .sc-gueYoa > .edit").first().click();
    cy.get('[type="text"]').type(" Piron");
    cy.get(".alterar").first().click();
    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Contato Editado com sucesso");
    });
    cy.screenshot("Contato Editado");
  });
});
