import React, { ElementType, FC, ReactNode } from "react";
import { TypographyTypes } from "../../../types/typographyTypes";
import { StyledTypography, StyledProps } from "./StyledTypography";

interface Props {
  as?: ElementType;
  color?: string;
  width?: string;
  margin?: string;
  highlightColor?: string;
  bold?: boolean;
  children: ReactNode;
  className?: string;
  variant?: TypographyTypes;
  href?: string;
}

export const Typography: FC<Props> = ({
  as = "p",
  children,
  color,
  width = "auto",
  margin = "0",
  className,
  highlightColor,
  variant,
  bold,
}) => {
  return (
    <StyledTypography
      as={as}
      className={className}
      width={width}
      color={color}
      margin={margin}
      highlightColor={highlightColor}
      bold={bold}
      name={variant}
    >
      {children}
    </StyledTypography>
  );
};
