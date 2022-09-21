import styled from "@emotion/styled";

export const ExternalCardContainer = styled.div``;

export const EventCardContainer = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  max-width: 21.5rem;
  border-radius: 2.5rem;
  position: relative;

  .card-image {
    width: 6.5rem;
    height: 6.5rem;
    position: relative;
    border-radius: 20%;
    margin-right: 2rem;

    img {
      border-radius: 20%;
      width: 6.5rem;
    }

    svg {
      position: absolute;
      width: 7rem;
      height: 7rem;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }

  .card-text {
    text-align: left;
    h2 {
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
  }

  .card-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &--background {
      z-index: -1;
      width: 150%;
      height: 120%;
    }

    &--border {
      z-index: 10;
      width: 150%;
      height: 120%;
    }
  }
`;
