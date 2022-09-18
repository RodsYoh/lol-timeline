export const Card = (props: CardProps) => {
  return <div />;
};

interface CardProps extends TimelineEvent {
  onEventClick(category: string): void;
}
