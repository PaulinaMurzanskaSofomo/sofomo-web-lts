import styled from "styled-components";
import { theme } from "../../../../themes/MainTheme";

export const StyledFooterWrapper = styled.footer`
  margin-top: 8rem;
  width: 100vw;
  min-width: 375px;
  height: auto;
  position: absolute;
  top: 100%;
  left: 0;
  padding-bottom: 6rem;
  .grid-footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(267px, auto);
    .grid {
      width: 100%;
    }
  }
  .side-image {
    width: 314px;
    height: 289px;
    position: absolute;
    top: -188px;
    left: -80px;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
      transform: scale(1.2);
      object-fit: contain;
    }
    @media (min-width: 768px) {
      width: 441px;
      height: 406;
      left: -144px;
      top: -188px;
    }
  }
  .copyrights {
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
  }
`;
