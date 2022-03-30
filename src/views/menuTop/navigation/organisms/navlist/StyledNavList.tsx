import styled from "styled-components";

export const StyledNavList = styled.ul`
  display: none;
  &.mobile {
    width: 100vw;
    height: auto;
    min-width: 37.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    list-style-type: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(120vw, -20px);
    animation: slideOut 0.1s ease-out;
    transition: all 0.1s ease-out;
    padding: 3rem;
    &.active {
      transform: translate(-133px, 8rem);
      animation: slideIn 0.1s ease-out;
    }
  }
  @media (min-width: 1094px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    transition: transform 0.1s linear;
  }
  button {
    font-size: 1.8rem;
    width: 100%;
    height: 5.2rem;
    margin: 4rem 0 40vh;

    @media (min-width: 1094px) {
      width: 10.5rem;
      height: 3.6rem;
      margin: 0 0 0 3.4rem;
      font-size: 1.5rem;
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 1;
    }
    5% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
