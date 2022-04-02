import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledListFooter = styled.div`
  width: 100%;
  display: block;
  .title {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .lists-wrapper {
    display: flex;
    .about-list {
      list-style-type: none;
      margin-right: 2rem;
      li {
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${theme.colors.fontLightGrey};
        &:hover {
          color: ${theme.colors.backgroudBlue};
          font-weight: bolder;
        }
      }
    }
  }
  &.list-developers {
    li {
      width: 8rem;
    }
  }
`;
