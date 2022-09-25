import { type ReactNode } from "react";
import { type CalendarEventProps } from "./CalendarEvent";
import { CalendarEventPosition } from "./styles";

/**
 * Component that defines if the event will be an external link
 * or a button to filter sub-events.
 */
export const CalendarEventWrapper = (props: CalendarEventWrapperProps) => {
  const {
    url,
    subEvents,
    children,
    category,
    onEventClick,
    distanceFromStart,
    sizeInDays,
  } = props;

  if (url)
    return (
      <ExternalEvent
        url={url}
        distanceFromStart={distanceFromStart}
        sizeInDays={sizeInDays}
      >
        {children}
      </ExternalEvent>
    );

  if (subEvents)
    return (
      <AnotherEvent
        category={category}
        onEventClick={onEventClick}
        distanceFromStart={distanceFromStart}
        sizeInDays={sizeInDays}
      >
        {children}
      </AnotherEvent>
    );

  return <article>{children}</article>;
};

/**
 * Component that defines if the event will open additional
 * cards on the featured cards section.
 */
export const AnotherEvent = (props: EventCalendarEventProps) => {
  const { children, onEventClick, category, distanceFromStart, sizeInDays } =
    props;

  return (
    <CalendarEventPosition
      as="button"
      data-testid="another-event"
      onClick={() => onEventClick(category)}
      distanceFromStart={distanceFromStart}
      sizeInDays={sizeInDays}
    >
      {children}
    </CalendarEventPosition>
  );
};

/**
 * When the timeline event points to an external link,
 * this component is used
 */
export const ExternalEvent = (props: ExternalCalendarEventProps) => {
  const { url, children, distanceFromStart, sizeInDays } = props;

  return (
    <CalendarEventPosition
      as="a"
      data-testid="external-event"
      // @ts-ignore
      href={url}
      target="_blank"
      rel="noreferrer"
      distanceFromStart={distanceFromStart}
      sizeInDays={sizeInDays}
    >
      {children}
    </CalendarEventPosition>
  );
};

interface CalendarEventWrapperProps extends CalendarEventProps {
  /**
   * CalendarEvent content
   */
  children: ReactNode;
  distanceFromStart: number;
  sizeInDays: number;
}

interface EventCalendarEventProps {
  /**
   * CalendarEvent handler to filter sub-events on click
   */
  onEventClick: CalendarEventProps["onEventClick"];
  /**
   * CalendarEvent content
   */
  children: ReactNode;
  /**
   * Key of the data object
   */
  category: CalendarEventProps["category"];
  distanceFromStart: number;
  sizeInDays: number;
}

interface ExternalCalendarEventProps {
  /**
   * URL always existis on this event
   */
  url: NonNullable<CalendarEventProps["url"]>;
  /**
   * CalendarEvent content
   */
  children: ReactNode;
  distanceFromStart: number;
  sizeInDays: number;
}
