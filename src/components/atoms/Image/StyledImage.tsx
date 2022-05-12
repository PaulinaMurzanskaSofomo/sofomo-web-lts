import styled from "styled-components";
import { device } from "../../../utils";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
}

export const StyledImage = styled.div<Props>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  margin: ${({ margin }) => margin || "0"};
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    &.with-label {
      @media ${device.tablet} {
        margin-bottom: 0.6rem;
      }
      @media ${device.laptop} {
        margin-bottom: 1rem;
      }
    }
  }
  p {
    opacity: 0.4;
  }
`;
