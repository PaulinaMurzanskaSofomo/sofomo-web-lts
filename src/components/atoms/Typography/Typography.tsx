import React, { FC } from "react";
import { StyledTypography } from "./StyledTypography";

interface Props {
  className: string;
  width?: string;
  margin?: string;
  as?: any;
  align?: string;
}

const Typography: FC<Props> = ({ as = "p", className, children, width, margin, align }) => {
  return (
    <StyledTypography className={className} as={as} width={width} margin={margin} align={align}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
