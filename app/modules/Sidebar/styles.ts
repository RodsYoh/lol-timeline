import styled from "@emotion/styled";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  grid-column: 1/13;
  grid-row: 1/2;

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 1/13;
    grid-row: 1/3;
    align-items: flex-start;
    padding: 0 0 0 2rem;
    margin-bottom: 0;
  }
`;
