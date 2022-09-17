import { CalendarContainer } from "./styles";

export const CalendarWrapper = (props: CalendarWrapperProps) => {
  return <CalendarContainer>hello</CalendarContainer>;
};

interface CalendarWrapperProps {
  data: Record<string, TimelineEvent>[];
}
