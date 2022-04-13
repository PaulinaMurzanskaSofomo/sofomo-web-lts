import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

export const StyledCard = styled.div<Props>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "auto")};
`;
