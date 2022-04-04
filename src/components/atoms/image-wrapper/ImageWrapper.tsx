import React, { FC } from "react";
import { StyledImageWrapper } from "./StyledImageWrapper";

interface Props {
  image: string;
  classname?: string;
  alt: string;
  width?: string;
  height?: string;
}

const ImageWrapper: FC<Props> = ({ image, classname, alt, width, height }) => {
  return (
    <StyledImageWrapper className={classname} width={width} height={height}>
      <img src={image} alt={alt} />
    </StyledImageWrapper>
  );
};

export default ImageWrapper;
