import styled from "styled-components";
import { device } from "../../../utils/devices/devices";

export const StyledLogosShadowGrid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3rem;
  grid-auto-rows: minmax(3.5rem, auto);
  .logo {
    grid-column: span 3;
    @media ${device.tablet} {
      grid-column: span 2;
    }
    @media ${device.laptop} {
      grid-column: span 1;
    }
  }
  @media ${device.laptop} {
    margin-top: 4rem;
  }
`;
