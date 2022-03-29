import styled from "styled-components";
import { theme } from "../../../../themes/MainTheme";

export const StyledContentSwitch = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  background-color: #ffffff;
  height: auto;
  display: none;
  @media (min-width: 1094px) {
    position: fixed;
    top: 12rem;
    left: -133px;
    width: 1094px;
  }
`;

export const StyledContentWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: none;
  h3 {
    position: absolute;
    top: 0;
    left: 1.5rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${theme.colors.paragraph};
    font-weight: 400;
    line-height: 2rem;
    display: none;
  }
  @media (min-width: 768px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1094px) {
    h3 {
      display: block;
    }
  }
`;
