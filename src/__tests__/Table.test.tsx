import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Table } from "../components/table/Table";

beforeEach(() => {
  render(<Table />);
});

window.alert = jest.fn();

describe("Tabla de pokemones", () => {
  it("Elementos existen", () => {
    expect(screen.getByTestId("pokemons__table"));
    expect(screen.getByTestId("table__header"));
    expect(screen.getByTestId("new__pokemon__button"));
  });
  it("should have a new button to create a new pokemon", () => {
    const button = screen.getByTestId("new__pokemon__button");
    userEvent.click(button);
  });
});
