import { useState } from "react";
import { Tab, TabGroup } from "~/components/Tab";
import { TimelineHeaderContainer } from "./styles";

/**
 * Wrapper of components that interact with the timeline interval.
 */
export const TimelineHeader = () => {
  const [selectedTab, setSelectedTab] = useState("normal-calendar");

  function handleTabChange(event: React.SyntheticEvent, newValue: string) {
    setSelectedTab(newValue);
  }

  return (
    <TimelineHeaderContainer>
      <TabGroup currentlySelected={selectedTab} onChange={handleTabChange}>
        <Tab value="normal-calendar" isDisabled>
          Calendário
        </Tab>
        <Tab value="current-patch" isDisabled>
          Atualização 19.20
        </Tab>
      </TabGroup>
    </TimelineHeaderContainer>
  );
};
