import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "~/test-utils";

import { TabGroup, TabContext } from "./TabGroup";
import { Tab } from "./Tab";

describe("Tab", () => {
  describe("<Tab />", () => {
    it("renders a title", () => {
      render(
        <TabContext.Provider
          value={{ onChange: vi.fn(), currentlySelected: "im-a-tab" }}
        >
          <Tab value="im-a-tab">I'm a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", { name: "I'm a tab!" });
      expect(tab).toBeVisible();
    });

    it("runs a function when clicked", () => {
      const onChange = vi.fn();
      render(
        <TabContext.Provider
          value={{ onChange: vi.fn(), currentlySelected: "im-a-tab" }}
        >
          <Tab value="im-a-tab">I'm a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", { name: "I'm a tab!" });
      userEvent.click(tab);

      expect(onChange).toHaveBeenCalledWith("I'm a tab!");
    });

    it("is currently selected", () => {
      render(
        <TabContext.Provider
          value={{ onChange: vi.fn(), currentlySelected: "im-a-tab" }}
        >
          <Tab value="im-a-tab">I'm a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", {
        selected: true,
      });
      expect(tab).toHaveAccessibleName("I'm a tab!");
    });

    it("is currently not selected", () => {
      render(
        <TabContext.Provider
          value={{ onChange: vi.fn(), currentlySelected: "im-another-tab" }}
        >
          <Tab value="im-a-tab">I'm a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", {
        name: "I'm a tab!",
        selected: false,
      });
      expect(tab).toBeVisible();
    });
  });

  describe("<TabGroup />", () => {
    it("renders as an acessible tablist", () => {
      render(
        <TabGroup
          onChange={vi.fn()}
          currentlySelected="im-a-tab"
          aria-label="testing tab group"
        >
          <Tab value="im-a-tab">I'm a tab!</Tab>
          <Tab value="im-another-tab">I'm another tab!</Tab>
        </TabGroup>
      );

      const tabGroup = screen.getByRole("tablist", {
        name: "testing tab group",
      });
      expect(tabGroup).toBeVisible();
    });

    it("renders multiple tabs", () => {
      render(
        <TabGroup onChange={vi.fn()} currentlySelected="im-a-tab">
          <Tab value="im-a-tab">I'm a tab!</Tab>
          <Tab value="im-another-tab">I'm another tab!</Tab>
        </TabGroup>
      );

      const tabs = screen.getAllByRole("tab");
      expect(tabs).toHaveLength(2);
    });

    it("runs selects only one tab at a time", () => {
      render(
        <TabGroup onChange={vi.fn()} currentlySelected="im-a-tab">
          <Tab value="im-a-tab">I'm a tab!</Tab>
          <Tab value="im-another-tab">I'm another tab!</Tab>
        </TabGroup>
      );

      const selectedTab = screen.getByRole("tab", { selected: true });
      expect(selectedTab).toHaveTextContent("I'm a tab!");
    });

    it("unselects a tab when the user clicks on another", async () => {
      const user = userEvent.setup();

      render(
        <TabGroup onChange={vi.fn()} currentlySelected="im-a-tab">
          <Tab value="im-a-tab">I'm a tab!</Tab>
          <Tab value="im-another-tab">I'm another tab!</Tab>
        </TabGroup>
      );

      const tab = screen.getByRole("tab", { name: "I'm another tab!" });
      await user.click(tab);

      expect(tab).toHaveAttribute("aria-selected", "true");
    });

    it("has an active tab selector", () => {
      render(
        <TabGroup onChange={vi.fn()} currentlySelected="im-a-tab">
          <Tab value="im-a-tab">I'm a tab!</Tab>
          <Tab value="im-another-tab">I'm another tab!</Tab>
        </TabGroup>
      );

      const tabSelector = screen.getByTestId("active-tab-indicator");
      expect(tabSelector).toBeVisible();
    });
  });
});
