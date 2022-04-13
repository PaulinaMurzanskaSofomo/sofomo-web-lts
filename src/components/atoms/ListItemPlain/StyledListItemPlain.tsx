import styled from "styled-components";
import { device } from "../../../utils/devices/devices";

export const StyledListItemPlain = styled.a`
  width: 11.5rem;
  margin-bottom: 0.5rem;
  max-width: 10rem;
  display: block;
  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;
