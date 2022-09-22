import styled from "@emotion/styled";

export const IndicatorContainer = styled.svg`
  width: 80%;
  height: auto;
  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 1s linear forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const TabContainer = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  display: flex;
  flex-direction: column;
`;

export const TabGroupContainer = styled.div`
  display: flex;
`;
