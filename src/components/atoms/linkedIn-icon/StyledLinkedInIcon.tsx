import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledLinkedInIcon = styled.a`
  .lk-in {
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
`;
