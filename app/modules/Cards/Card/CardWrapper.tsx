import { type ReactNode } from "react";
import { type CardProps } from "./Card";
import { EventCard } from "./EventCard";
import { ExternalCard } from "./ExternalCard";

/**
 * Component that defines if the card will be an external link
 * or a button to filter sub-events.
 */
export const CardWrapper = (props: CardWrapperProps) => {
  const { url, subEvents, children, category, onEventClick } = props;

  if (url) return <ExternalCard url={url}>{children}</ExternalCard>;

  if (subEvents)
    return (
      <EventCard category={category} onEventClick={onEventClick}>
        {children}
      </EventCard>
    );

  return <article>{children}</article>;
};

interface CardWrapperProps extends CardProps {
  /**
   * Card content
   */
  children: ReactNode;
}
