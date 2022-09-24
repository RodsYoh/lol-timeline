import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const DayContainer = styled.div<DayContainerProps>`
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.color.border};
  border-right: 1px solid ${({ theme }) => theme.color.border};
  min-width: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .date {
    opacity: 0.2;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    ${({ isHighlighted, theme }) =>
      isHighlighted &&
      css`
        opacity: 1;
        font-weight: bold;
        background-color: ${theme.color.fontPrimary};
        color: ${theme.color.backgroundSecondary};
      `}
  }
`;

export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${({ daysLength }) => daysLength},
    calc(5rem + 2px)
  );
  overflow: scroll;
  margin-top: 1.5rem;
  margin-left: 1rem;

  .background {
    grid-column: 1/-1;
    height: 100%;
    display: flex;
  }
`;

interface DayContainerProps {
  isHighlighted?: boolean;
}

interface CalendarWrapperProps {
  daysLength: number;
}
