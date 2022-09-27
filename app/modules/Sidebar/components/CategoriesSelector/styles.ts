import styled from "@emotion/styled";

export const CategoriesSelectorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > p {
    margin-top: 1rem;
    opacity: 0.5;
  }

  @media ${({ theme }) => theme.screens.lg} {
    align-items: flex-start;
    text-align: left;
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${({ theme }) => theme.screens.lg} {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 1.5rem;
    }
  }

  .checkbox {
    margin-top: 1rem;

    @media ${({ theme }) => theme.screens.lg} {
      margin-top: 0;
    }
  }

  .time-window-selector {
    margin-top: 0.5rem;
    @media ${({ theme }) => theme.screens.lg} {
      display: none;
    }
  }
`;
