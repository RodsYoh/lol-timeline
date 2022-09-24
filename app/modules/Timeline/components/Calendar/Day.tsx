import { forwardRef, useEffect, useRef } from "react";
import { Typography } from "~/components/Typography";
import { DayContainer } from "./styles";

export const Day = forwardRef<HTMLDivElement, DayProps>((props, ref) => {
  const { day, isHighlighted } = props;
  const test = useRef<HTMLDivElement>(null);
  const localWeekDay = day.toLocaleDateString(undefined, { weekday: "long" });
  const date = day.getDate();

  useEffect(() => {
    if (isHighlighted)
      test.current?.scrollIntoView({ block: "center", inline: "center" });
  }, [isHighlighted]);

  return (
    <DayContainer
      ref={test}
      role="listitem"
      aria-current={isHighlighted ? "date" : undefined}
      isHighlighted={isHighlighted}
    >
      <Typography htmlTag="p" className="date">
        {localWeekDay[0].toUpperCase()} {date}
      </Typography>
    </DayContainer>
  );
});

Day.displayName = "Day";

interface DayProps {
  day: Date;
  isHighlighted?: boolean;
  shouldRenderTheMonthName?: boolean;
}
