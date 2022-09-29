import { Champion } from "~/components/Champions";
import { Typography } from "~/components/Typography";
import { CalendarDetailsImage } from "./CalendarDetailsImage";
import { getEventDateSpan } from "./helpers";
import { CalendarDetailsContainer } from "./styles";

export const CalendarDetails = (props: CalendarDetailsProps) => {
  const { image, name, startDate, endDate, description, champions } = props;

  return (
    <CalendarDetailsContainer>
      <div className="event-details">
        <CalendarDetailsImage image={image} />
        <div className="event-details__text">
          <div className="event-details__date">
            <Typography htmlTag="h3">
              <strong>{getEventDateSpan(startDate, endDate)}</strong>
            </Typography>
          </div>
          <Typography htmlTag="h4" variant="heading">
            {name.toUpperCase()}
          </Typography>
          <Typography htmlTag="p">{description}</Typography>
        </div>
      </div>
      {champions && (
        <div className="champions-details">
          {champions.map((champion) => (
            <div
              className="champion-details__champion"
              key={champion.championId}
            >
              <Champion champion={champion} />
              <Typography htmlTag="p" variant="subtitle">
                {champion.name}
              </Typography>
            </div>
          ))}
        </div>
      )}
      <div className="view-more">
        <Typography htmlTag="p" variant="subtitle">
          Clique para ir ao link original
        </Typography>
      </div>
    </CalendarDetailsContainer>
  );
};

export interface CalendarDetailsProps extends TimelineEvent {
  category: string;
}
