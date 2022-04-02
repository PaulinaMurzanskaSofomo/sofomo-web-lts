import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledSocials = styled.div`
  width: 9rem;
  height: 3.5rem;
  display: flex;
  .icon {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &.fs {
      color: #fff;
      background-color: #b4b4b4;
      margin-right: 2rem;
      font-size: 2rem;
      &:hover {
        background-color: ${theme.colors.backgroudBlue};
        transition: 0.3s;
      }
    }
    &.lk-in {
      color: #b4b4b4;
      background-color: #b4b4b4;
      &:hover {
        background-color: ${theme.colors.backgroudBlue};
        color: ${theme.colors.backgroudBlue};
        transition: 0.3s;
      }
      .lk-inner {
        background-color: white;
        width: 53%;
        height: 53%;
        border-radius: 1px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
