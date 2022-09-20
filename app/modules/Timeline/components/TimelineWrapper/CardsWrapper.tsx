import { CardsContainer } from "./styles";

export const CardsWrapper = (props: CardsWrapperProps) => {
  return <CardsContainer>there</CardsContainer>;
};

interface CardsWrapperProps {
  /**
   * Data object where the key is a category for events
   */
  data: Record<string, TimelineEvent>;
}
