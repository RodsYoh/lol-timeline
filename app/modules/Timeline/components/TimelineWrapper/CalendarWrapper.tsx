import { Calendar } from "../Calendar";
import { TimelineHeader } from "../TimelineHeader";
import { CalendarContainer } from "./styles";

export const CalendarWrapper = (props: CalendarWrapperProps) => {
  return (
    <CalendarContainer>
      <TimelineHeader />
      <Calendar
        from={new Date("2022-08-10T00:00:00.000")}
        to={new Date("2022-12-01T00:00:00.000")}
      />
    </CalendarContainer>
  );
};

interface CalendarWrapperProps {
  /**
   * Data object where the key is a category for events
   */
  data: Record<string, TimelineEvent>;
}
