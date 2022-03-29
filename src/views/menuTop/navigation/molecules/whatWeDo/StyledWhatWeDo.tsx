import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledGroup = styled.div`
  display: block;
  padding: 1.5rem;
  height: 10.3rem;
  h4 {
    margin-bottom: 0.5rem;
  }
  &:hover {
    background-color: ${theme.colors.hoverBgr};
    transition: 0.5s;
    h4 {
      color: ${theme.colors.activeHeaders};
    }
  }
  @media (min-width: 768px) {
    margin-right: 0.5rem;
  }
`;
