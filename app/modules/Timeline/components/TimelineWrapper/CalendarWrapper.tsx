import { TimelineHeader } from "../TimelineHeader";
import { CalendarContainer } from "./styles";

export const CalendarWrapper = (props: CalendarWrapperProps) => {
  return (
    <CalendarContainer>
      <TimelineHeader />
    </CalendarContainer>
  );
};

interface CalendarWrapperProps {
  /**
   * Data object where the key is a category for events
   */
  data: Record<string, TimelineEvent>;
}
