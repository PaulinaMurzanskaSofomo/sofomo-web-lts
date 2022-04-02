import React, { FC } from "react";
import { StyledFooterWrapper } from "./StyledFooter";
<<<<<<< HEAD
import sideImage from "../../../assets/images/footer/-g-Group 73.svg";
=======
import sideImage from "../../../../assets/images/footer/-g-Group 73.svg";
import { copyrights } from "../../../../assets/content/footer/SectionAbout";
import { FooterSection1 } from "../footer-section1";
import { FooterSection2 } from "../footer-section2";
import { FooterSection3 } from "../footer-section3";
>>>>>>> b3f84f4 (Create final footer view as organisms)

const Footer: FC = () => {
  return (
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
};

export default Footer;
