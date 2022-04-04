import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledFooterSection2 = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  .col-owner-content {
    margin: 0 auto;
    padding: 8rem 1.5rem 6rem;
    min-width: 375px;
    max-width: 1094px;
    height: 100%;
    display: grid;
    grid-gap: 3.5rem;
    border-bottom: 1px solid ${theme.colors.grey1pxDividingLine};
    grid-template-areas:
      "peter1"
      "robert"
      "peter2";
    @media (min-width: 768px) {
      padding: 12rem 1.5rem 8rem;
      max-width: 768px;
      grid-template-areas:
        "peter1 peter1 peter1 peter1 peter1 peter1"
        "robert robert robert peter2 peter2 peter2";
    }
    @media (min-width: 1094px) {
      padding: 12rem 3rem 8rem;
      max-width: 1094px;
      grid-template-areas: "peter1 peter1 robert robert peter2 peter2";
    }
    .owner {
      border: 3px solid white;
      &:first-child {
        grid-area: peter1;
      }
      &:nth-child(2) {
        grid-area: robert;
      }
      &:last-child {
        grid-area: peter2;
      }
    }
  }
`;
