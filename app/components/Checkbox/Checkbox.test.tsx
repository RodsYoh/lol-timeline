import { describe, it } from "vitest";
import { render, screen } from "../../test-utils";
import { Checkbox } from "./Checkbox";

describe("<Checkbox />", () => {
  it("renders input `unchecked` as default", () => {
    render(<Checkbox label="Checkbox test" />);

    const checkbox = screen.getByLabelText("Checkbox test");
    expect(checkbox).not.toBeChecked();
  });

  it("renders the input `checked` em `checked={true}`", () => {
    render(<Checkbox label="Checkbox test" checked />);

    const checkbox = screen.getByLabelText("Checkbox test");
    expect(checkbox).toBeChecked();
  });
});
