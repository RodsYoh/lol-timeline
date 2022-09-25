import { type ReactNode } from "react";
import { type CalendarEventProps } from "./CalendarEvent";

/**
 * Component that defines if the event will be an external link
 * or a button to filter sub-events.
 */
export const CalendarEventWrapper = (props: CalendarEventWrapperProps) => {
  const { url, subEvents, children, category, onEventClick } = props;

  if (url) return <ExternalEvent url={url}>{children}</ExternalEvent>;

  if (subEvents)
    return (
      <AnotherEvent category={category} onEventClick={onEventClick}>
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
  const { children, onEventClick, category } = props;

  return (
    <button data-testid="another-event" onClick={() => onEventClick(category)}>
      {children}
    </button>
  );
};

/**
 * When the timeline event points to an external link,
 * this component is used
 */
export const ExternalEvent = (props: ExternalCalendarEventProps) => {
  const { url, children } = props;

  return (
    <a data-testid="external-event" href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

interface CalendarEventWrapperProps extends CalendarEventProps {
  /**
   * CalendarEvent content
   */
  children: ReactNode;
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
}
