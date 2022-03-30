import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledDevelopersWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  width: calc(100% + 3rem);
  margin-left: -1.5rem;
  padding-top: 1.5rem;
  h3 {
    position: absolute;
    top: 0;
    left: 3rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${theme.colors.paragraph};
    font-weight: 400;
    line-height: 2rem;
    display: none;
  }
  @media (min-width: 768px) {
    padding-top: 4.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    h3 {
      display: block;
      left: 1.5rem;
    }
  }
  @media (min-width: 1094px) {
    width: 1094px;
    margin: 4rem auto 0;
    padding: 4.2rem 1.5rem;

    h3 {
      left: 3rem;
    }
  }
  .roles-image-wrapper {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: auto;
    .roles-wrapper {
      width: 100%;
      display: flex;
      position: relative;
      flex-direction: column;
      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }
      @media (min-width: 1094px) {
        width: calc(100% - 24rem);
      }
    }
    .image-box {
      display: none;
      @media (min-width: 1094px) {
        display: block;
      }
    }
  }
`;
