import React from "react";
import { Meta } from "@storybook/react";
import Footer from "./Footer";
import { StyledFooterWrapper } from "./StyledFooter";
import { FooterSection1 } from "../footer-section1";
import { FooterSection2 } from "../footer-section2";
import { FooterSection3 } from "../footer-section3";
import sideImage from "../../../../assets/images/footer/-g-Group 73.svg";
import { copyrights } from "../../../../assets/content/footer/SectionAbout";

const meta: Meta = {
  title: "orgnisms/Footer",
  component: Footer,
};

export default meta;

export const Default = () => (
  <StyledFooterWrapper>
    <div className="grid-footer">
      <FooterSection1 classname="grid grid-col-1-blue" />
      <FooterSection2 classname="grid grid-col-2-owners" />
      <FooterSection3 classname="grid grid-col-3-about" />
    </div>
    <div className="side-image">
      <img src={sideImage} alt="" />
    </div>
    <div className="copyrights">{copyrights}</div>
  </StyledFooterWrapper>
);
