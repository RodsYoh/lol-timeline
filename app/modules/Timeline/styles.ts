import styled from "@emotion/styled";

export const BackgroundContainer = styled.div`
  grid-column: 1/13;
  grid-row: 2/3;
  overflow: hidden;
  position: relative;
  pointer-events: none;

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 3/13;
    grid-row: 1/3;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0.5rem;
    z-index: -1;
    height: 100%;

    @media ${({ theme }) => theme.screens.lg} {
      height: auto;
      top: 0;
    }
  }
`;

export const CalendarContainer = styled.section`
  grid-column: 1/13;
  padding: 0.25rem;
  grid-row: 2/3;

  min-height: 50vh;

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 3/13;
    grid-row: 1/3;
    margin-bottom: 20vh;
    padding: 1.5rem 2rem;
  }
`;

export const CardsContainer = styled.section`
  grid-column: 1/13;
  grid-row: 3/4;

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 2/13;
    grid-row: 2/3;
  }
`;
