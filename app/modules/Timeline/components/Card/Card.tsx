export const Card = (props: CardProps) => {
  return <div />;
};

interface CardProps extends TimelineEvent {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick(category: string): void;
}
