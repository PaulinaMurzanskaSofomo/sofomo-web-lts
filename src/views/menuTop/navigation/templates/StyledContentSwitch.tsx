import styled from "styled-components";

export const StyledMobileDisplay = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 3rem;
  @media (min-width: 1094px) {
    display: none;
  }
`;

export const StyledFullDisplay = styled.div`
  width: 100vw;
  box-shadow: 0px 18px 40px -15px rgba(50, 49, 94, 0.2);
  background-color: #fff;
  display: none;
  &.menu-dropped {
    @media (min-width: 1094px) {
      display: block;
      position: absolute;
      top: 8rem;
      left: 0;
      min-height: 55vh;
    }
  }
`;
