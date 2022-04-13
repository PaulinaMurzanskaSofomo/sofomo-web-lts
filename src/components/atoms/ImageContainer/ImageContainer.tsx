import React, { FC } from "react";
import { StyledImageContainer } from "./StyledImageContainer";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}

const ImageContainer: FC<Props> = ({ width, height, children, className }) => {
  return (
    <StyledImageContainer width={width} height={height} className={className}>
      {children}
    </StyledImageContainer>
  );
};

export default ImageContainer;
