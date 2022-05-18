import React, { ElementType, FC, ReactNode } from "react";
import { theme } from "../../../themes/MainTheme";
import { TypographyTypes } from "../../../types/typographyTypes";
import { StyledTypography, StyledProps } from "./StyledTypography";

interface Props {
  as?: ElementType;
  color?: string;
  width?: string;
  margin?: string;
  highlightColor?: string;
  fontWeight?: string;
  children: ReactNode;
  className?: string;
  variant?: TypographyTypes;
}

export const Typography: FC<Props> = ({
  as = "p",
  children,
  color = theme.colors.gray500,
  width = "auto",
  margin = "0",
  className,
  highlightColor,
  variant,
  fontWeight = "400",
}) => {
  return (
    <StyledTypography
      as={as}
      className={className}
      width={width}
      color={color}
      margin={margin}
      highlightColor={highlightColor}
      fontWeight={fontWeight}
      name={variant}
    >
      {children}
    </StyledTypography>
  );
};
