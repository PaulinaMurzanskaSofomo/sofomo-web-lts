import React, { FC } from "react";
import { StyledImageContainer } from "./StyledImageContainer";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
}

const ImageContainer: FC<Props> = ({ width, height, children, className, onClick }) => {
  return (
    <StyledImageContainer width={width} height={height} className={className} onClick={onClick}>
      {children}
    </StyledImageContainer>
  );
};

export default ImageContainer;
