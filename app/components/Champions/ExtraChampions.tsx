import { Typography } from "../Typography";
import { ExtraChampionsContainer } from "./styles";

export const ExtraChampions = (props: ExtraChampionsProps) => {
  const { number } = props;
  return (
    <ExtraChampionsContainer>
      <Typography htmlTag="strong">+{number}</Typography>
    </ExtraChampionsContainer>
  );
};

interface ExtraChampionsProps {
  number: number;
}
