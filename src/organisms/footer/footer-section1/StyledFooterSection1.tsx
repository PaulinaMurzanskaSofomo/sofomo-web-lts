import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledFooterSection1 = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${theme.colors.backgroudBlue};
  .col-blue-content {
    margin: 0 auto;
    min-width: 375px;
    max-width: 1094px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding: 6rem 3rem 6.5rem;
    grid-gap: 5rem;
    @media (min-width: 768px) {
      padding: 7.5rem 3rem;
      max-width: 768px;
    }
    @media (min-width: 1094px) {
      grid-gap: 4rem;
      max-width: 1094px;
      padding: 7.5rem 3rem 8.5rem;
    }
  }
`;
