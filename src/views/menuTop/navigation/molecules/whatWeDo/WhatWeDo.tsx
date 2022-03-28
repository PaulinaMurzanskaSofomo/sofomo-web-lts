import React, { FC } from "react";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";
import { whatWeDo, advantages } from "../../../../../assets/content/navMenu/about";

import { StyledWrapper, StyledGroup } from "./StyledWhatWeDo";

interface Props {
  id?: any;
  active?: boolean;
}

const WhatWeDo: FC<Props> = ({ active }) => {
  return (
    <StyledWrapper className={active ? "active" : ""}>
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
