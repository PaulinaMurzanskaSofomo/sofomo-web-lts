import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledOwnerCard = styled.div`
  width: 100%;
  height: 14.6rem;
  background-color: none;
  display: block;
  .header {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
    h3 {
      margin: 0 1rem 0 0;
    }
  }
  .image-address-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    .address-box {
      width: auto;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        width: 100%;
        font-size: 1.4rem;
        line-height: 2.4rem;
        font-weight: 400;
        color: ${theme.colors.fontLightGrey};
      }
    }
  }
`;
