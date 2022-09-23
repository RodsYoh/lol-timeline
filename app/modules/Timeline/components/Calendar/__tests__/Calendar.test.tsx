import { describe, it, vi } from "vitest";
import { screen, render } from "~/test-utils";
import { Calendar } from "../Calendar";
import { Day } from "../Day";

describe("Calendar", () => {
  describe("<Day />", () => {
    it("should render the weekday followed by a number", () => {
      render(<Day day={new Date("2022-09-23T00:00:00.000")} />);

      const day = screen.getByRole("listitem", { name: "F 23" });
      expect(day).toBeInTheDocument();
    });

    it("should be highlighted", () => {
      render(<Day day={new Date("2022-09-23T00:00:00.000")} isHighlighted />);

      const day = screen.getByRole("listitem", { selected: true });
      expect(day).toBeInTheDocument();
    });

    it("should renders the month name", () => {
      render(
        <Day
          day={new Date("2022-09-01T00:00:00.000")}
          shouldRenderTheMonthName
        />
      );

      const monthName = screen.getByText("September");
      expect(monthName).toBeInTheDocument();
    });
  });

  describe("<Calendar />", () => {
    it("should render one day for each day on range", () => {
      const from = new Date("2022-09-12T00:00:00.000");
      const to = new Date("2022-09-22T00:00:00.000");

      render(<Calendar from={from} to={to} />);

      const days = screen.getAllByRole("listitem");
      expect(days).toHaveLength(11);
    });

    it("should render month name on the first item", () => {
      const from = new Date("2022-09-12T00:00:00.000");
      const to = new Date("2022-09-22T00:00:00.000");

      render(<Calendar from={from} to={to} />);

      const monthName = screen.getByText("September");
      expect(monthName).toBeInTheDocument();
    });

    it("should render month name on a new month", () => {
      const from = new Date("2022-09-28T00:00:00.000");
      const to = new Date("2022-10-02T00:00:00.000");

      render(<Calendar from={from} to={to} />);

      const monthName = screen.getByText("October");
      expect(monthName).toBeInTheDocument();
    });

    it("scrolls to today's date on render", () => {
      vi.useFakeTimers().setSystemTime(new Date("2022-09-23T00:00:00.000"));
      const from = new Date("2022-07-28T00:00:00.000");
      const to = new Date("2022-12-02T00:00:00.000");

      render(<Calendar from={from} to={to} />);

      const today = screen.getByRole("listitem", { name: "F 23" });
      expect(today).toBeVisible();
    });
  });
});
