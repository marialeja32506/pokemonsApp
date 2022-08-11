import { render, screen } from "@testing-library/react";
import { Search } from "../components/search/Search";

beforeEach(() => {
  render(<Search />);
});

describe("Search bar", () => {
  it("Elementos existen", () => {
    expect(screen.getByTestId("main__title"));
    expect(screen.getByTestId("search__bar"));
  });
});
