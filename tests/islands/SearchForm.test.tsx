import {
  cleanup,
  render,
  setup,
  userEvent,
} from "$fresh-testing-library/components.ts";
import { expect } from "$fresh-testing-library/expect.ts";
import { afterEach, beforeAll, describe, it } from "$std/testing/bdd.ts";
import SearchForm from "../../islands/SearchForm.tsx";

describe("SearchForm", () => {
  beforeAll(() => setup());
  afterEach(cleanup);

  it("allows a user to enter a search query", async () => {
    const screen = render(<SearchForm />);
    const user = userEvent.setup();
    const searchInput = screen.getByLabelText("Title or Keyword(s)");

    await user.type(searchInput, "Alien");

    expect(searchInput).toHaveValue("Alien");
  });
});
