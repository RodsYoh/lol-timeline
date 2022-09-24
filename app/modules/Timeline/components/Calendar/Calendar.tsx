import { useMemo } from "react";
import { Day } from "./Day";

import { getDatesBetween } from "./helpers";
import { CalendarWrapper } from "./styles";

/**
 * Horizontal calendar that displays the days of the
 * period between the `from` and `to` dates.
 */
export const Calendar = (props: CalendarProps) => {
  const { from, to } = props;
  const days = useMemo(() => getDatesBetween(from, to), [from, to]);

  return (
    <CalendarWrapper role="listbox" daysLength={days.length}>
      <div className="background">
        {days.map((day) => {
          const isToday =
            day.toLocaleDateString() === new Date().toLocaleDateString();

          return (
            <Day key={day.toISOString()} day={day} isHighlighted={isToday} />
          );
        })}
      </div>
    </CalendarWrapper>
  );
};

interface CalendarProps {
  from: Date;
  to: Date;
}
