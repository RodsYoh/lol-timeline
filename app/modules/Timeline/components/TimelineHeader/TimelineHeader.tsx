import { useState } from "react";
import { Tab, TabGroup } from "~/components/Tab";

/**
 * Wrapper of components that interact with the timeline interval.
 */
export const TimelineHeader = () => {
  const [selectedTab, setSelectedTab] = useState("normal-calendar");

  function handleTabChange(event: React.SyntheticEvent, newValue: string) {
    setSelectedTab(newValue);
  }

  return (
    <div>
      <TabGroup currentlySelected={selectedTab} onChange={handleTabChange}>
        <Tab value="normal-calendar">Calendário</Tab>
        <Tab value="current-patch">Atualização 19.20</Tab>
      </TabGroup>
    </div>
  );
};
