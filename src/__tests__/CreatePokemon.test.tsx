import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreatePokemon } from "../components/forms/CreatePokemon";

beforeEach(() => {
  render(<CreatePokemon />);
});

window.alert = jest.fn();

describe("Crear un pokemon", () => {
  it("Elementos existen", () => {
    expect(screen.getByTestId("create__title"));
    expect(screen.getByTestId("create__name"));
    expect(screen.getByTestId("create__image"));
    expect(screen.getByTestId("create__attack"));
    expect(screen.getByTestId("create__defense"));
    expect(screen.getByTestId("create__save__button"));
    expect(screen.getByTestId("create__cancel__button"));
  });
  it("should have a cancel button to cancel the creation", () => {
    const button = screen.getByTestId("create__cancel__button");
    userEvent.click(button);
  });

  it("should have a button to Create a pokemon", () => {
    const button = screen.getByTestId("create__save__button");
    userEvent.click(button);
  });
});
