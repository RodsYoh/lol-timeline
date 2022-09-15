import styled from "@emotion/styled";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-right: 0.5rem;
  }

  input {
    opacity: 0;
    visibility: hidden;
  }
`;
