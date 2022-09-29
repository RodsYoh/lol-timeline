import styled from "@emotion/styled";

export const CalendarDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .event-details {
    display: flex;
    align-items: center;

    &__img {
      width: 6.5rem;
      height: 6.5rem;
      position: relative;
      border-radius: 20%;
      margin-right: 2rem;
      z-index: 90;

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
        transition: transform 0.2s ease-out;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;

      & > * {
        margin-bottom: 0.5rem;
      }

      &__date {
        padding: 0.25rem;
        border-radius: 0.25rem;
        background-color: ${({ theme }) => theme.color.backgroundPrimary};
      }
    }
  }

  .champions-details {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &__champion {
      margin-right: 1rem;
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
  }

  .view-more {
    margin-top: 1rem;
    text-align: right;

    P {
      color: ${({ theme }) => theme.color.highlight};
    }
  }
`;
