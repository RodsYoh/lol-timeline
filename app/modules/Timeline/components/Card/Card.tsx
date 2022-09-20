import { CardWrapper } from "./CardWrapper";
import { CardContainer } from "./styles";

export const Card = (props: CardProps) => {
  const { name, image, description } = props;
  return (
    <CardWrapper {...props}>
      <CardContainer>
        {image && <img alt={image.alt} src={image.url} />}
        <div className="card-text">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </CardContainer>
    </CardWrapper>
  );
};

export interface CardProps extends TimelineEvent {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick(category: string): void;
  /**
   * Key of the data object
   */
  category: string;
}
