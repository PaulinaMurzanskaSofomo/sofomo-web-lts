import React, { FC } from "react";
import { StyledFooterWrapper } from "./StyledFooter";
import sideImage from "../../../assets/images/footer/-g-Group 73.svg";
import { copyrights } from "../../../assets/content/footer/SectionAbout";
import { FooterSection1 } from "../footer-section1";
import { FooterSection2 } from "../footer-section2";
import { FooterSection3 } from "../footer-section3";
import { ImageWrapper } from "../../../components/atoms/image-wrapper";
import { StyledCopyrights } from "../../../components/atoms/copyrights";

const Footer: FC = () => {
  return (
    <StyledFooterWrapper>
      <div className="grid-footer">
        <FooterSection1 classname="grid grid-col-1-blue" />
        <FooterSection2 classname="grid grid-col-2-owners" />
        <FooterSection3 classname="grid grid-col-3-about" />
      </div>
      <ImageWrapper alt="side" classname="side-image" image={sideImage} />
      <StyledCopyrights>{copyrights}</StyledCopyrights>
    </StyledFooterWrapper>
  );
};

export default Footer;
