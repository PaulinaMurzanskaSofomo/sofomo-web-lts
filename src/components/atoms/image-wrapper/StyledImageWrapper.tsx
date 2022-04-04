import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

export const StyledImageWrapper = styled.div<Props>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
