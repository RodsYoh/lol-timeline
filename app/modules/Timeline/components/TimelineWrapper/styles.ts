import styled from "@emotion/styled";

export const BackgroundContainer = styled.div`
  grid-column: 3/13;
  grid-row: 1/3;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
`;

export const CalendarContainer = styled.section`
  grid-column: 3/13;
  grid-row: 1/2;
  padding: 1rem;
`;

export const CardsContainer = styled.section`
  grid-column: 2/13;
  grid-row: 2/3;
`;
