import { render, screen } from "@testing-library/react";
import Post from "..";

describe("Teste <Post />", () => {
  it("Deve renderizar corretamente", () => {
    render(<Post imageUrl="https://via.placeholder.com/200x200">test</Post>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
