import React, { FC } from "react";
import { StyledDocket } from "./StyledDocket";

interface Props {
  label?: string;
  padding?: string;
  variant?: "wider";
}
export const Docket: FC<Props> = ({ label, variant }) => {
  return <StyledDocket className={variant}>{label}</StyledDocket>;
};
