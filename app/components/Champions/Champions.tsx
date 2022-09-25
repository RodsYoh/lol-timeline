import { Champion } from "./Champion";
import { ExtraChampions } from "./ExtraChampions";
import { ChampionGroupContainer } from "./styles";

export const Champions = (props: ChampionsProps) => {
  const { champions, limit = 4 } = props;
  const championsToDisplay = limit ? champions.slice(0, limit) : champions;
  const extraChampionsLength = champions.length - championsToDisplay.length;

  return (
    <ChampionGroupContainer className="champions-group">
      {extraChampionsLength > 0 && (
        <ExtraChampions number={extraChampionsLength} />
      )}
      {championsToDisplay.map((champ) => (
        <Champion key={champ.championId} champion={champ} />
      ))}
    </ChampionGroupContainer>
  );
};

interface ChampionsProps {
  champions: Champion[];
  limit?: number;
}
