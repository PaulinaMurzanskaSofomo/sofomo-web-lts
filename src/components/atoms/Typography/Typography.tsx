import React, { FC } from "react";
import { TypographyTypes } from "../../../types/typographyTypes";
import { StyledTypography, StyledProps } from "./StyledTypography";

interface Props extends StyledProps {
  children: any;
  className?: string;
  variant?: TypographyTypes;
  href?: string;
}

export const Typography: FC<Props> = ({
  as = "p",
  children,
  color,
  width,
  margin,
  hoverColor,
  transform,
  hoverWeight,
  className,
  highlightColor,
  variant,
  href,
  bold,
}) => {
  return (
    <StyledTypography
      as={as}
      href={href}
      target="_blank"
      className={`${variant} ${className}`}
      width={width}
      color={color}
      margin={margin}
      hoverColor={hoverColor}
      hoverWeight={hoverWeight}
      transform={transform}
      highlightColor={highlightColor}
      bold={bold}
    >
      {children}
    </StyledTypography>
  );
};
