import styled from "@emotion/styled";

export const IndicatorContainer = styled.svg`
  width: 7rem;
  margin-top: 0.125rem;
  height: auto;

  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 1.25s linear forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const TabContainer = styled.button`
  padding: 1rem 1.5rem 0.5rem 1rem;
  min-width: 10rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabGroupContainer = styled.div`
  display: flex;
`;
