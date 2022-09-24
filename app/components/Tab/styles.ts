import styled from "@emotion/styled";

export const IndicatorContainer = styled.svg`
  width: 7rem;
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
  padding: 0.75rem 1rem 0.25rem 1rem;
  min-width: 10rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    span {
      opacity: 0.8;
    }
  }

  span {
    transition: opacity 0.2s ease-out;
  }
`;

export const TabGroupContainer = styled.div`
  display: flex;
`;
