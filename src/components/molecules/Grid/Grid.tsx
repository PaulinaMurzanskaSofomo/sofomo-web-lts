import React, { FC } from "react";
import { GridTypes } from "../../../types/gridTypes";
import { Image } from "../../atoms";
import { StyledGrid } from "./StyledGrid";

type AdditionalGridVariant = "loop";

interface Props {
  itemsList: {
    logo: any;
    label?: string;
  }[];
  variant?: GridTypes;
  className?: string;
  additionalVariant?: AdditionalGridVariant;
}

export const Grid: FC<Props> = ({ className, itemsList, variant, additionalVariant }) => {
  return (
    <StyledGrid className={`${className} grid-wrapper ${variant} ${additionalVariant}`}>
      {itemsList.map((item, i) => (
        <Image
          key={item.logo + i}
          src={item.logo}
          alt="logo"
          label={item.label}
          className="grid-item"
        />
      ))}
    </StyledGrid>
  );
};
