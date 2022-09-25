import styled from "@emotion/styled";

export const CalendarEventContainer = styled.div`
  position: relative;

  .calendar-event-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
    border-radius: 0.25rem;
    z-index: 0;
  }

  .calendar-event-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    padding: 0.5rem 1rem;
  }
`;

export const CalendarEventPosition = styled.div<CalendarEventPositionProps>`
  height: 4rem;
  margin: 0 0.125rem;

  grid-column: ${({ distanceFromStart }) => distanceFromStart + 1} / span
    ${({ sizeInDays }) => sizeInDays + 1};
`;

interface CalendarEventPositionProps {
  distanceFromStart: number;
  sizeInDays: number;
}
