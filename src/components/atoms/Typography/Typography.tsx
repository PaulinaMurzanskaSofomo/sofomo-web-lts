import React, { FC, ReactNode } from "react";
import { StyledTypography } from "./StyledTypography";

interface Props {
  as: any;
  children: ReactNode | undefined;
  transform?: string;
  color?: string;
  width?: string;
  margin?: string;
  weight?: string;
  fontBase?: [fontSize?: number, lineHeight?: number, letterSpacing?: number];
  fontMd?: [fontSize?: number, lineHeight?: number, letterSpacing?: number];
  fontLg?: [fontSize?: number, lineHeight?: number, letterSpacing?: number];
  hoverColor?: string;
  hoverWeight?: string;
  className?: string;
}

const Typography: FC<Props> = ({
  as = "p",
  children = "",
  color,
  width,
  margin,
  fontBase,
  fontLg,
  fontMd,
  weight,
  hoverColor,
  transform,
  hoverWeight,
  className,
}) => {
  return (
    <StyledTypography
      as={as}
      className={className}
      fontBase={fontBase}
      fontMd={fontMd}
      fontLg={fontLg}
      width={width}
      color={color}
      margin={margin}
      hoverColor={hoverColor}
      hoverWeight={hoverWeight}
      weight={weight}
      transform={transform}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
