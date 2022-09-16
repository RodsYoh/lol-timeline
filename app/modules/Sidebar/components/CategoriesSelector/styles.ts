import styled from "@emotion/styled";

export const CategoriesSelectorContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${({ theme }) => theme.screens.lg} {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3rem;
  }

  .checkbox {
    margin-top: 1.5rem;
  }
`;
