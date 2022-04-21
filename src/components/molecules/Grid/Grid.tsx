import React, { FC } from "react";
import { Logo } from "../../atoms";
import { StyledGrid } from "./StyledGrid";

interface Props {
  itemsList: {
    logo?: any;
    label?: string;
    id: number;
  }[];
  variant?: "grid-4-items" | "grid-5-items" | "grid-6-items";
  className?: string;
  additionalVariant?: "loop";
}

export const Grid: FC<Props> = ({ className, itemsList, variant, additionalVariant }) => {
  return (
    <StyledGrid className={`${className} grid-wrapper ${variant} ${additionalVariant}`}>
      {itemsList.map((item, i) => (
        <Logo key={item.id + i} logo={item.logo} label={item.label} className="grid-item" />
      ))}
    </StyledGrid>
  );
};
