import { keyframes } from "styled-components";

export const currencyLoop = () => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
