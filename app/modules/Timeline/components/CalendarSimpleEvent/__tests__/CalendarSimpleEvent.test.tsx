import { describe, it, vi } from "vitest";
import { screen, render } from "~/test-utils";

import { CalendarSimpleEvent } from "../CalendarSimpleEvent";
import { data as mockData } from "../../../../../../vitest/mocks";

describe("<CalendarSimpleEvent />", () => {
  it("should render a line though the calendar", () => {
    render(
      <CalendarSimpleEvent
        firstDate={new Date()}
        onEventClick={vi.fn()}
        category="worlds"
        {...mockData.worlds}
      />
    );
    const line = screen.getByTestId("line");
    expect(line).toBeVisible();
  });

  it("should render a title", () => {
    render(
      <CalendarSimpleEvent
        firstDate={new Date()}
        onEventClick={vi.fn()}
        category="worlds"
        {...mockData.worlds}
      />
    );
    const title = screen.getByText("Mundial");
    expect(title).toBeVisible();
  });
});
