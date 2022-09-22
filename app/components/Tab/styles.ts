import styled from "@emotion/styled";

export const IndicatorContainer = styled.svg`
  width: 80%;
  height: auto;
  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s linear forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
