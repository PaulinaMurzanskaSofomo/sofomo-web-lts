import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledNavWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 6.6rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  position: relative;
  &.mobile {
    animation: lineFadeOut 0.3s ease-out 0.5s 1 backwards;
    &.active {
      animation: lineFadeIn 0.3s ease-out 0.5s 1 forwards;
    }
  }

  @keyframes lineFadeIn {
    0% {
      box-shadow: 0 0 0 0 ${theme.colors.shadow};
    }

    100% {
      box-shadow: 0 1px 0 0 ${theme.colors.shadow};
    }
  }

  @keyframes lineFadeOut {
    0% {
      box-shadow: 0 1px 0 0 ${theme.colors.shadow};
    }
    50% {
      box-shadow: 0 0.5px 0 0 ${theme.colors.shadow};
    }

    100% {
      box-shadow: 0 0 0 0 ${theme.colors.shadow};
    }
  }
`;
export const StyledOnBarMenu = styled.div`
  width: auto;
  min-height: 6.6rem;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;
  align-items: center;
`;
