export const ExternalCard = (props: ExternalCardProps) => {
  return <a />;
};

interface ExternalCardProps extends Omit<TimelineEvent, "url"> {
  /**
   * URL always existis on this card
   */
  url: string;
}
