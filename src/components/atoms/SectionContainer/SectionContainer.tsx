import React, { FC } from "react";
import { StyledSectionContainer } from "./StyledSectionContainer";

interface Props {
  background?: string;
  children?: any;
  as?: any;
}

export const SectionContainer: FC<Props> = ({ children, background, as }) => {
  return (
    <StyledSectionContainer background={background} as={as}>
      {children}
    </StyledSectionContainer>
  );
};
