import React, { FC } from "react";
import { StyledDocket } from "./StyledDocket";

type Variant = "wider";

export interface Props {
  label?: string;
  padding?: string;
  variant?: Variant;
}
export const Docket: FC<Props> = ({ label, variant }) => {
  return <StyledDocket className={variant}>{label}</StyledDocket>;
};
