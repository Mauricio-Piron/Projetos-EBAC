// Importa as funções necessárias para realizar os testes
import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    // Renderizando o componente
    render(<PostComment />);
    // Verifica se o texto Comentar é renderizado, ou seja se ele está no DOM
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários", () => {
    // Renderiza o componente
    render(<PostComment />);

    // Adiciona o primeiro comentário
    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "Comentário adicionado via testes",
      },
    });
    // Clica no botão para adicionar o comentário
    fireEvent.click(screen.getByTestId("comment-button"));

    // Adiciona o segundo comentário
    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "Segundo comentário adicionado via testes",
      },
    });
    // Clica no botão para adicionar o comentário
    //fireEvente simula acoes de clique , mudança de campo...
    fireEvent.click(screen.getByTestId("comment-button"));

    // Verifica se dois comentários foram adicionados
    expect(screen.getAllByTestId("comment-element")).toHaveLength(2);
  });
});
