import styled from "styled-components";
import { device } from "../../../utils/devices/devices";

interface Props {
  background?: string;
}

export const StyledSectionContainer = styled.div<Props>`
  width: 100%;
  height: auto;
  background-color: ${({ background }) => (background ? background : "none")};
  @media ${device.tablet} {
    width: 100vw;
  }
`;
