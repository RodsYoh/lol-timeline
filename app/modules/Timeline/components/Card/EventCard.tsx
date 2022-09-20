export const EventCard = (props: EventCardProps) => {
  return <button />;
};

interface EventCardProps extends TimelineEvent {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick(category: string): void;
}
