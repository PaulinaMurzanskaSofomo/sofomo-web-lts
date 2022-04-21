import React, { FC } from "react";
import { StyledImage } from "./StyledImage";

interface Props {
  width?: string;
  height?: string;
  src: any;
  alt: string;
  className?: string;
  onClick?: VoidFunction;
  margin?: string;
}

export const Image: FC<Props> = ({ width, height, src, alt, margin, className, onClick }) => {
  return (
    <StyledImage
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      margin={margin}
    >
      <img src={src} alt={alt} />
    </StyledImage>
  );
};
