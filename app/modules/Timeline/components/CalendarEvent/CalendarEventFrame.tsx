import { useTheme } from "@emotion/react";
import {
  getRandomEventBackground,
  getRandomEventFrame,
  handleSize,
} from "./helpers";
import { CalendarEventFrameContainer } from "./styles";

/**
 * Component that displays a frame around the calendar event.
 */
export const CalendarEventFrame = (props: CalendarEventFrameProps) => {
  const { sizeInDays, borderCategory, backgroundCategory } = props;
  const theme = useTheme();

  const size = handleSize(sizeInDays);

  return (
    <>
      <CalendarEventFrameContainer
        className="event-background"
        data-testid={size.dataTestId}
        viewBox={size.viewBox}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={getRandomEventBackground(size.size)}
          fill={theme.color[backgroundCategory]}
        />
      </CalendarEventFrameContainer>
      <CalendarEventFrameContainer
        className="event-frame"
        viewBox={size.viewBox}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={getRandomEventFrame(size.size)}
          stroke={theme.color[borderCategory]}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </CalendarEventFrameContainer>
    </>
  );
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
