import styled from "styled-components";
import { device } from "../../../utils";

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  p {
    opacity: 0.4;
  }
`;

export const StyledImageWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    margin-bottom: 0.6rem;
  }
  @media ${device.laptop} {
    margin-bottom: 1rem;
  }
`;
