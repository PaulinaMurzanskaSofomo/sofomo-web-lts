import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledFooterSection3 = styled.div`
  background-color: ${theme.colors.white};
  width: 100%;
  .col-about-content {
    margin: 0 auto;
    padding: 5.6rem 1.5rem 6.5rem;
    min-width: 375px;
    max-width: 1094px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4.5rem;
    @media (min-width: 768px) {
      padding: 7rem 1.5rem 6.5rem;
      max-width: 768px;
    }
    @media (min-width: 1094px) {
      padding: 7rem 3rem 3rem;
      max-width: 1094px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0;
      .about-text {
        grid-column-start: 1;
        grid-column-end: 2;
      }
      .about-lists-block {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
    .about-lists-block {
      display: grid;
      grid-gap: 6rem;
      grid-template-columns: 1fr 1fr;
      @media (min-width: 1094px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
`;
