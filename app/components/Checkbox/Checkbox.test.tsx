import { describe, it } from "vitest";
import user from "@testing-library/user-event";
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

  it("runs the `onChange` function", () => {
    const onChange = jest.fn();
    render(<Checkbox label="Checkbox test" onChange={onChange} />);

    const checkbox = screen.getByLabelText("Checkbox test");
    user.click(checkbox);

    expect(onChange).toBeCalledTimes(1);
  });
});
