import styled from "styled-components";
import { theme } from "../../../../themes/MainTheme";

export const StyledLogoWrapper = styled.div`
  width: 10.3rem;
  height: 2.3rem;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const StyledBarsWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  display: block;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1094px) {
    display: none;
  }
`;
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
  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 5px;
    &.up {
      display: none;
      &.open {
        display: block;
      }
    }
    &.down {
      display: block;
      &.open {
        display: none;
      }
    }
  }
`;
