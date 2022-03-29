import React, { FC } from "react";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";
import { whatWeDo, advantages } from "../../../../../assets/content/navMenu/about";
import { StyledGroup } from "./StyledWhatWeDo";
import { StyledContentWrapper } from "../../templates/StyledContentSwitch";

const WhatWeDo: FC = () => {
  return (
    <StyledContentWrapper className="what-we-do">
      <h3>what we do </h3>
      <StyledGroup>
        <StyledHeaderH4 label="What We Do" />
        <StyledParagraphP text={whatWeDo} />
      </StyledGroup>
      <StyledGroup>
        <StyledHeaderH4 label="Our Andvanges" />
        <StyledParagraphP text={advantages} />
      </StyledGroup>
    </StyledContentWrapper>
  );
};

export default WhatWeDo;
