import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

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
    padding: 2.5rem 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(120vw, -20px);
    animation: slideOut 0.1s ease-out;
    transition: all 0.1s ease-out;

    &.active {
      transform: translate(-133px, 6.6rem);
      animation: slideIn 0.1s ease-out;
    }
  }
  @media (min-width: 1094px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0 34px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    transition: transform 0.1s linear;
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
