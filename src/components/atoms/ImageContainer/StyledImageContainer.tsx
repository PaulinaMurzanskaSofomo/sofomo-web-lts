import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

export const StyledImageContainer = styled.div<Props>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
