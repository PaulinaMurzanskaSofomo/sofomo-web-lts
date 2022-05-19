import React, { FC } from "react";
import { theme } from "../../../themes/MainTheme";
import { Typography } from "../Typography";
import { StyledImage, StyledImageContainer } from "./StyledImage";

export interface Props {
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
  width = "100%",
  height = "100%",
  src,
  alt,
  margin = "0",
  className,
  onClick,
  label,
}) => {
  return (
    <StyledImageContainer
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      margin={margin}
    >
      <StyledImage src={src} alt={alt} className={label ? "with-label" : ""} />
      {label && (
        <Typography variant="body_text_1" color={theme.colors.dark} as="p">
          {label}
        </Typography>
      )}
    </StyledImageContainer>
  );
};
