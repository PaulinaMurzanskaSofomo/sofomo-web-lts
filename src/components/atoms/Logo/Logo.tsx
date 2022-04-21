import React, { FC } from "react";
import { Typography } from "../Typography";
import { StyledImageWrapper, StyledLogo } from "./StyledLogo";

interface Props {
  logo?: string;
  label?: string;
  className?: string;
}

export const Logo: FC<Props> = ({ logo, label, className }) => {
  return (
    <StyledLogo className={className}>
      <StyledImageWrapper>
        <img src={logo} alt="logo" />
      </StyledImageWrapper>
      {label && (
        <Typography variant={"font-11-to-12"} as="p">
          {label}
        </Typography>
      )}
    </StyledLogo>
  );
};
