import React, { FC } from "react";
import { StyledIcon } from "./StyledIcon";

interface Props {
  fontSize?: string;
  path?: string;
  variant?: string;
  width?: string;
  children?: any;
}

export const Icon: FC<Props> = ({ fontSize, path, children, variant, width }) => {
  return (
    <StyledIcon
      className={variant}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      fontSize={fontSize}
      width={width}
    >
      {children}
    </StyledIcon>
  );
};
