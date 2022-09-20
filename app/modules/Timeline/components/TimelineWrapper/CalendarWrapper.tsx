import { CalendarContainer } from "./styles";

export const CalendarWrapper = (props: CalendarWrapperProps) => {
  return <CalendarContainer>hello</CalendarContainer>;
};

interface CalendarWrapperProps {
  /**
   * Data object where the key is a category for events
   */
  data: Record<string, TimelineEvent>;
}
