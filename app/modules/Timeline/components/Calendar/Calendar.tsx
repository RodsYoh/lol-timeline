import { useMemo } from "react";
import { Day } from "./Day";

import { getDatesBetween } from "./helpers";
import { CalendarWrapper } from "./styles";

export const Calendar = (props: CalendarProps) => {
  const { from, to } = props;
  const days = useMemo(() => getDatesBetween(from, to), [from, to]);

  return (
    <CalendarWrapper role="listbox">
      {days.map((day) => {
        const isToday =
          day.toLocaleDateString() === new Date().toLocaleDateString();

        return (
          <Day key={day.toISOString()} day={day} isHighlighted={isToday} />
        );
      })}
    </CalendarWrapper>
  );
};

interface CalendarProps {
  from: Date;
  to: Date;
}
