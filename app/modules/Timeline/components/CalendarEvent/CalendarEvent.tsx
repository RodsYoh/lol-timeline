import { useEffect, useRef, useState } from "react";
import { Champions } from "~/components/Champions";
import { Typography } from "~/components/Typography";
import { CalendarEventFrame } from "./CalendarEventFrame";
import { CalendarEventWrapper } from "./CalendarEventWrapper";
import { getDaysBetweenDates } from "./helpers";
import { CalendarEventContainer } from "./styles";

/**
 * Component that displays a calendar event in the timeline.
 */
export const CalendarEvent = (props: CalendarEventProps) => {
  const {
    name,
    champions,
    startDate,
    endDate,
    backgroundCategory,
    borderCategory,
    firstDate,
  } = props;
  const championsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [stickyComponentsWidth, setStickyComponentsWidth] = useState({
    champions: 0,
    title: 0,
  });

  const sizeInDays = getDaysBetweenDates(startDate, endDate);
  const distanceFromStart = getDaysBetweenDates(firstDate, startDate);

  useEffect(() => {
    const championsWidth = championsRef.current?.clientWidth || 0;
    const titleWidth = titleRef.current?.clientWidth || 0;

    setStickyComponentsWidth({ champions: championsWidth, title: titleWidth });
  }, []);

  return (
    <CalendarEventWrapper
      {...props}
      distanceFromStart={distanceFromStart}
      sizeInDays={sizeInDays}
    >
      <CalendarEventContainer
        championsWidth={stickyComponentsWidth.champions}
        titleWidth={stickyComponentsWidth.title}
      >
        <div className="calendar-event-background" />
        <CalendarEventFrame
          sizeInDays={sizeInDays}
          borderCategory={borderCategory}
          backgroundCategory={backgroundCategory}
        />
        <div className="calendar-event-content">
          {champions && (
            <Champions
              champions={champions}
              className="champions"
              ref={championsRef}
            />
          )}
          <Typography htmlTag="h3" ref={titleRef}>
            {name}
          </Typography>
        </div>
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
  /**
   * First date of the timeline
   */
  firstDate: Date;
}
