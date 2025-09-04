import { assertExists } from "https://deno.land/std@0.208.0/assert/mod.ts";
import Home from "../../routes/index.tsx";
import SearchForm from "../../islands/SearchForm.tsx";

Deno.test(
  "should render SearchForm component",
  () => {
    // Act: Execute the code being tested
    const result = Home();

    // Assert: Check it renders SearchForm
    const searchFormElement = result.props.children.find(
      (child: { type: unknown }) => child.type === SearchForm
    );
    assertExists(searchFormElement);
  }
);
