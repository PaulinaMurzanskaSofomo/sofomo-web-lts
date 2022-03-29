import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

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
    transition: 0.3s;
  }
  @media (min-width: 768px) {
    width: 30%;
    margin-right: 0.5rem;
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
  @media (min-width: 1094px) {
    display: block;
    &.clicked-dev-open {
      display: none;
    }
  }
`;

export const StyledRoleList = styled.ul`
  margin-top: 10px;
  @media (min-width: 1094px) {
    display: none;
    &.clicked-dev-open {
      display: block;
    }
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
