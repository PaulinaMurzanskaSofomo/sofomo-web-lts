import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledRoleList = styled.ul`
  margin-top: 10px;
  @media (min-width: 1094px) {
    display: block;
  }
`;

export const StyledRoleItem = styled.li`
  width: 100%;
  list-style-type: none;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  svg {
    display: none;
    color: ${theme.colors.activeHeaders};
  }
  &:hover {
    p {
      color: ${theme.colors.activeHeaders};
      transform: scale(1.02);
    }
    svg {
      display: block;
    }
  }
`;
