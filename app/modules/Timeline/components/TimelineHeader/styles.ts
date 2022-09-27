import styled from "@emotion/styled";

export const TimelineHeaderContainer = styled.div`
  display: none;

  @media ${({ theme }) => theme.screens.lg} {
    display: block;
  }
`;
