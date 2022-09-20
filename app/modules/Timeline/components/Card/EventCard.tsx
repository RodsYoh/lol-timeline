import { type ReactNode } from "react";
import { type CardProps } from "./Card";

export const EventCard = (props: EventCardProps) => {
  const { children, onEventClick, category } = props;

  return (
    <button data-testid="event-card" onClick={() => onEventClick(category)}>
      {children}
    </button>
  );
};

interface EventCardProps {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick: CardProps["onEventClick"];
  /**
   * Card content
   */
  children: ReactNode;
  /**
   * Key of the data object
   */
  category: CardProps["category"];
}
