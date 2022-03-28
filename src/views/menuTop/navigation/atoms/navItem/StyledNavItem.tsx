import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledItem = styled.li`
  width: 100%;
  height: 5.6rem;
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${theme.colors.textDarkNavy};
  border-bottom: 1px solid ${theme.colors.shadow};
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: auto;
    font-size: 1.5rem;
  }
  @media (min-width: 1094px) {
    padding-left: 3.4rem;
    border: none;
  }
`;
export const StyledChevronBox = styled.div`
  font-size: 1.8rem;
  margin-left: 5px;
  .down {
    display: block;
    color: ${theme.colors.textDarkNavy};
    &.active {
      display: none;
    }
  }
  .up {
    display: none;
    &.active {
      display: block;
      color: ${theme.colors.activeHeaders};
    }
  }
`;
