import { vi, describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { data as mockData } from "../../../../../vitest/mocks";

import { Card } from "./Card";

describe("<Card />", () => {
  describe("General Card Component", () => {
    it("renders a Event Card when the event has a `subEvents` property", () => {
      render(<Card {...mockData.udyr} onEventClick={vi.fn()} />);

      const eventCard = screen.getByTestId("event-card");

      expect(eventCard).toBeVisible();
    });

    it("renders a External Card when the event has a `url` property", () => {
      render(<Card {...mockData.udyr.subEvents![0]} onEventClick={vi.fn()} />);

      const eventCard = screen.getByTestId("external-card");

      expect(eventCard).toBeVisible();
    });

    it("has a title", () => {
      render(<Card {...mockData.udyr} onEventClick={vi.fn()} />);

      const cardTitle = screen.getByRole("heading", { name: "Udyr" });

      expect(cardTitle).toBeVisible();
    });

    it("has a description", () => {
      render(<Card {...mockData.udyr} onEventClick={vi.fn()} />);

      const cardDescription = screen.getByRole("paragraph", {
        name: "The Udyr champion update is now testing on the PBE!",
      });

      expect(cardDescription).toBeVisible();
    });

    it("has an featured image", () => {
      render(<Card {...mockData.udyr} onEventClick={vi.fn()} />);

      const cardImage = screen.getByRole("image", {
        name: "Definitely not Udyr splash art with Udyr taking a selfie",
      });

      expect(cardImage).toBeVisible();
    });
  });

  describe("<ExternalCard />", () => {
    it("has a external url", () => {
      render(<Card {...mockData.udyr.subEvents![0]} onEventClick={vi.fn()} />);

      const card = screen.getByRole("link", {
        name: /Gameplay trailer/gi,
      });

      expect(card).toHaveAttribute(
        "href",
        "https://www.youtube.com/watch?v=kfyDoF658HA"
      );
    });
  });

  describe("<EventCard />", () => {
    it("runs the `onEventClick` function when clicked", async () => {
      const user = userEvent.setup();
      const onEventClick = vi.fn();
      render(<Card {...mockData.udyr} onEventClick={onEventClick} />);

      const card = screen.getByRole("button", {
        name: /Udyr/gi,
      });
      await user.click(card);
      expect(onEventClick).toHaveBeenCalledWith("udyr");
    });
  });
});
