import styled from "@emotion/styled";

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 6fr 3fr;
  padding: 1rem 0;
  height: calc(100% - 2rem);
`;
