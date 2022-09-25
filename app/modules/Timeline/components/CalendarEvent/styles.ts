import styled from "@emotion/styled";

export const CalendarEventContainer = styled.div`
  position: relative;

  .calendar-event-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    padding: 0rem 1rem;
  }
`;

export const CalendarEventPosition = styled.div<CalendarEventPositionProps>`
  margin: 0.5rem 0.125rem;

  grid-column: ${({ distanceFromStart }) => distanceFromStart + 1} / span
    ${({ sizeInDays }) => sizeInDays + 1};
`;

export const CalendarEventFrameContainer = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 1.5rem);
  height: calc(100% + 1.5rem);

  &.small {
  }

  &.medium {
  }

  &.large {
  }

  &.event-frame {
    z-index: 10;
  }

  &.event-background {
    z-index: -1;
  }
`;

interface CalendarEventPositionProps {
  distanceFromStart: number;
  sizeInDays: number;
  href?: string;
  target?: string;
  rel?: string;
}
