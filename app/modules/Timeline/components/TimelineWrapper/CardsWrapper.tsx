import { CardsContainer } from "./styles";

export const CardsWrapper = (props: CardsWrapperProps) => {
  return <CardsContainer>there</CardsContainer>;
};

interface CardsWrapperProps {
  data: Record<string, TimelineEvent>[];
}
