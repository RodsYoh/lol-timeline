import { forwardRef } from "react";

export const Day = forwardRef<HTMLDivElement, DayProps>((props, ref) => {
  return <div />;
});

Day.displayName = "Day";

interface DayProps {
  day: Date;
  isHighlighted?: boolean;
  shouldRenderTheMonthName?: boolean;
}
