import styled from "@emotion/styled";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-right: 0.75rem;
  }

  input {
    opacity: 0;
    visibility: hidden;
  }

  .background {
    opacity: 0;
    transition: opacity 0.1s ease-out;
    &--checked {
      opacity: 1;
    }
  }
`;
