import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledDevWrapper = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export const StyledRoles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  padding: 1.5rem;
  img {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    width: 1.8rem;
    height: 1.8rem;
  }
  &:hover {
    background-color: ${theme.colors.hoverBgr};
  }
`;

export const StyledDevDisplay = styled.div`
  width: 100%;
  padding-left: 3rem;
  &:hover {
    h4 {
      color: ${theme.colors.activeHeaders};
    }
  }
`;
export const StyledDescription = styled.div`
  display: none;
`;

export const StyledRoleList = styled.ul`
  margin-top: 10px;
`;
export const StyledRoleItem = styled.li`
  width: 100%;
  list-style-type: none;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    svg {
      display: none;
      color: ${theme.colors.activeHeaders};
    }
    &:hover {
      p {
        color: ${theme.colors.activeHeaders};
      }
      svg {
        display: block;
      }
    }
  }
`;
