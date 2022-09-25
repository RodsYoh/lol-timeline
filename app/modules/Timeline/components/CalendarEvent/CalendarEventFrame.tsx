export const CalendarEventFrame = (props: CalendarEventFrameProps) => {
  const { sizeInDays, ...other } = props;

  if (sizeInDays < 3) return <CalendarSmallEventFrame {...other} />;
  if (sizeInDays < 8) return <CalendarMediumEventFrame {...other} />;
  return <CalendarLargeEventFrame {...other} />;
};

const CalendarSmallEventFrame = (
  props: Omit<CalendarEventFrameProps, "sizeInDays">
) => {
  return <></>;
  // return <svg data-testid="small-frame" />;
};

const CalendarMediumEventFrame = (
  props: Omit<CalendarEventFrameProps, "sizeInDays">
) => {
  return <></>;
  // return <svg data-testid="medium-frame" />;
};

const CalendarLargeEventFrame = (
  props: Omit<CalendarEventFrameProps, "sizeInDays">
) => {
  return <></>;
  // return <svg data-testid="large-frame" />;
};

interface CalendarEventFrameProps {
  /**
   * Color category for event's border
   */
  borderCategory: Category;
  /**
   * Color category for event's background
   */
  backgroundCategory: Category;
  /**
   * Size of the event in days
   */
  sizeInDays: number;
}
