import React, { FC } from "react";
import { StyledLabel } from "./StyledLabel";

interface Props {
  label?: string;
  padding?: string;
  variant?: "wider";
}
export const Label: FC<Props> = ({ label, variant }) => {
  return <StyledLabel className={variant}>{label}</StyledLabel>;
};
