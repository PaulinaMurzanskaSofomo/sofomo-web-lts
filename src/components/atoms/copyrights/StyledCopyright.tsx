import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledCopyrights = styled.div`
  min-width: 375px;
  max-width: 1094px;
  margin: 0 auto;
  padding-left: 1.5rem;
  color: hsla(0, 0%, 70.6%, 0.65);
  font-weight: 500;
  background-color: ${theme.colors.white};
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1094px) {
    max-width: 1094px;
  }
`;
