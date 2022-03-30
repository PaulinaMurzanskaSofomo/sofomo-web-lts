import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledDevDisplay = styled.div`
  width: 100%;
  padding-left: 3rem;
  &:hover {
    h4 {
      color: ${theme.colors.activeHeaders};
      cursor: pointer;
    }
  }
`;

export const StyledDescription = styled.div`
  display: none;
`;
