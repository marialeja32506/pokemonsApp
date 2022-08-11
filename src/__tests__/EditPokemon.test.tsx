import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EditPokemon } from "../components/forms/EditPokemon";

beforeEach(() => {
  render(<EditPokemon />);
});

describe("Editar un pokemon", () => {
  it("Elementos existen", () => {
    expect(screen.getByTestId("edit__title"));
    expect(screen.getByTestId("edit__name"));
    expect(screen.getByTestId("edit__image"));
    expect(screen.getByTestId("edit__attack"));
    expect(screen.getByTestId("edit__defense"));
    expect(screen.getByTestId("edit__save__button"));
    expect(screen.getByTestId("edit__cancel__button"));
  });
  it("should have a cancel button to cancel the edit", () => {
    const button = screen.getByTestId("edit__cancel__button");
    userEvent.click(button);
  });

  it("should have a button to save changes in current pokemon", () => {
    const button = screen.getByTestId("edit__save__button");
    userEvent.click(button);
  });
});
