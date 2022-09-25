import { Champions } from "~/components/Champions";
import { Typography } from "~/components/Typography";
import { CalendarEventFrame } from "./CalendarEventFrame";
import { CalendarEventWrapper } from "./CalendarEventWrapper";
import { getDaysBetweenDates } from "./helpers";
import { CalendarEventContainer } from "./styles";

export const CalendarEvent = (props: CalendarEventProps) => {
  const {
    name,
    champions,
    startDate,
    endDate,
    backgroundCategory,
    borderCategory,
  } = props;

  const sizeInDays = getDaysBetweenDates(startDate, endDate);

  return (
    <CalendarEventWrapper {...props}>
      <CalendarEventContainer>
        <CalendarEventFrame
          sizeInDays={sizeInDays}
          borderCategory={borderCategory}
          backgroundCategory={backgroundCategory}
        />
        <Typography htmlTag="h3">{name}</Typography>
        {champions && <Champions champions={champions} />}
      </CalendarEventContainer>
    </CalendarEventWrapper>
  );
};

export interface CalendarEventProps extends TimelineEvent {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick(category: string): void;
  /**
   * Key of the data object
   */
  category: string;
}
