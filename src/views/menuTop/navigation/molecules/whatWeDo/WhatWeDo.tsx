import React, { FC } from "react";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";
import { whatWeDo, advantages } from "../../../../../assets/content/navMenu/about";
import { theme } from "../../../../../themes/MainTheme";

import { StyledWrapper, StyledGroup } from "./StyledWhatWeDo";

interface Props {
  id?: any;
  target?: string;
  active?: boolean;
}

const WhatWeDo: FC<Props> = ({ active }) => {
  return (
    <StyledWrapper>
      <StyledGroup className={active ? "active" : ""}>
        <StyledHeaderH4 label="What We Do" />
        <StyledParagraphP text={whatWeDo} />
      </StyledGroup>
      <StyledGroup>
        <StyledHeaderH4 label="Our Andvanges" />
        <StyledParagraphP text={advantages} />
      </StyledGroup>
    </StyledWrapper>
  );
};

export default WhatWeDo;
