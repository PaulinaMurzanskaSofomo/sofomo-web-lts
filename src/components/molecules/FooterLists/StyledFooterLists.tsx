import styled from "styled-components";
import { device } from "../../../utils/devices/devices";

export const StyledFooterLists = styled.div`
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 1fr;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
