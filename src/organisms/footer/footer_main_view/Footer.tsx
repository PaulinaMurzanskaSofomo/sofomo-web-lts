import React, { FC } from "react";
import { StyledFooterWrapper } from "./StyledFooter";
import sideImage from "../../../assets/images/footer/-g-Group 73.svg";

const Footer: FC = () => {
  return (
    <StyledFooterWrapper>
      <div className="grid-footer">
        <div className="grid grid-col-1-blue">
          <div className="col-blue-content">
            <div className="content header">
              Companies big and small alike choose Sofomo as their development partner
            </div>
            <div className="content icons">
              <div className="icon">icon</div>
              <div className="icon" />
              <div className="icon" />
              <div className="icon" />
              <div className="icon" />
              <div className="icon" />
            </div>
          </div>
        </div>
        <div className="grid grid-col-2-owners">
          <div className="col-owner-content">
            <div className="owner">peter</div>
            <div className="owner">robert</div>
            <div className="owner">peter 2</div>
          </div>
        </div>
        <div className="grid grid-col-3-about">
          <div className="col-about-content">
            <div className="about-text">about us</div>
            <div className="about-lists-block">
              <div className="list-about">list about</div>
              <div className="list-developers">list developers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="side-image">
        <img src={sideImage} alt="" />
      </div>
      <div className="copyrights">Copyrights here</div>
    </StyledFooterWrapper>
  );
};

export default Footer;
