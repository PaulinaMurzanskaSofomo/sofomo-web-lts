import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledFacebookIcon = styled.a`
  .fs {
    color: #fff;
    background-color: #b4b4b4;
    margin-right: 2rem;
    font-size: 2rem;
    &:hover {
      background-color: ${theme.colors.backgroudBlue};
      transition: 0.3s;
    }
  }
`;
