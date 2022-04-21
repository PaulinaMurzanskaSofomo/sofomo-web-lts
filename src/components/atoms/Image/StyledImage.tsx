import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
}

export const StyledImage = styled.div<Props>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  margin: ${({ margin }) => margin || "0"};
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
