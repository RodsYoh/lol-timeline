import { Calendar } from "./components/Calendar";
import { TimelineHeader } from "./components/TimelineHeader";
import { getMinMaxDate } from "./helpers";
import { CalendarContainer } from "./styles";

/**
 * Container for the events that are displayed on the timeline.
 */
export const CalendarWrapper = (props: CalendarWrapperProps) => {
  const { data } = props;

  const dates = getMinMaxDate(Object.values(data));

  console.log(dates);

  return (
    <CalendarContainer>
      <TimelineHeader />
      <Calendar from={dates.minDate} to={dates.maxDate} data={data} />
    </CalendarContainer>
  );
};

interface CalendarWrapperProps {
  /**
   * Data object where the key is a category for events
   */
  data: Record<string, TimelineEvent>;
}
