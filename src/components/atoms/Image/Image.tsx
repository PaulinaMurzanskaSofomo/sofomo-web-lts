import React, { FC } from "react";
import { Typography } from "../Typography";
import { StyledImage } from "./StyledImage";

interface Props {
  width?: string;
  height?: string;
  src: any;
  alt: string;
  className?: string;
  onClick?: VoidFunction;
  margin?: string;
  label?: string;
}

export const Image: FC<Props> = ({
  width,
  height,
  src,
  alt,
  margin,
  className,
  onClick,
  label,
}) => {
  return (
    <StyledImage
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      margin={margin}
    >
      <img src={src} alt={alt} className={label ? "with-label" : ""} />
      {label && (
        <Typography variant={"font-11-to-12"} as="p">
          {label}
        </Typography>
      )}
    </StyledImage>
  );
};
