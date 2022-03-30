import React, { FC } from "react";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";
import { whatWeDo, advantages } from "../../../../../assets/content/navMenu/about";
import Developers from "../developers/Developers";
import ImageBox from "../../atoms/ImageBox";
import { StyledWhatWeDoWrapper } from "./StyledWhatWeDo";

const WhatWeDo: FC = () => {
  return (
    <StyledWhatWeDoWrapper className="what-we-do">
      <h3 className="subtitle">what we do </h3>
      <div className="group-image">
        <div className="content-group-wrapper">
          <div className="content-group">
            <StyledHeaderH4 label="What We Do" />
            <StyledParagraphP text={whatWeDo} />
          </div>
          <div className="content-group">
            <StyledHeaderH4 label="Our Andvanges" />
            <StyledParagraphP text={advantages} />
          </div>
        </div>
        <div className="image-box-wrapper">
          <ImageBox />
        </div>
      </div>
      <div className="devs-what-we-do">
        <Developers />
      </div>
    </StyledWhatWeDoWrapper>
  );
};

export default WhatWeDo;
