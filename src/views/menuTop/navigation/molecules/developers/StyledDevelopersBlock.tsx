import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledRoles = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  padding: 1.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
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
    margin: 0 1rem 4rem 0;
  }
`;
