/// <reference types="cypress" />

describe("Teste para adicao de um novo contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Preenchimentos os campos do formulário", () => {
    cy.get('[type="text"]').type("José Maurício");
    cy.get('[type="email"]').type("contato.maurciopion@test.com");
    cy.get('[type="tel"]').type("(31)00000-0000");
    cy.get(".adicionar").click();
  });
  it("Deve renderizar 4 contatos", () => {
    cy.get("h2").should("have.length", +1);
    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Contato Adicionado com Sucesso");
    });
    cy.screenshot("Contato Adicionado");
  });
});
