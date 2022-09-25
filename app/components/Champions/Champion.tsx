import { ChampionContainer } from "./styles";

export const Champion = (props: ChampionProps) => {
  const { champion } = props;
  const { championId, name } = champion;

  return (
    <ChampionContainer
      src={`https://assets.5pots.com/file/cincopots/champions/${championId}.png`}
      alt={name}
      data-testid="champion-portrait"
    />
  );
};

interface ChampionProps {
  champion: Champion;
}
