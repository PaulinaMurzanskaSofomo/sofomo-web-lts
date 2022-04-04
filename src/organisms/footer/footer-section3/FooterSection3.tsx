import React, { FC } from "react";
import { AboutCard } from "../../../components/molecules/about-card-small";
import { aboutList, developers1, developers2 } from "../../../assets/content/footer/SectionAbout";
import { StyledFooterSection3 } from "./StyledFooterSection3";
import { FooterLists } from "../../../components/molecules/footer-lists";

interface Props {
  classname?: string;
}

const FooterSection3: FC<Props> = ({ classname }) => {
  return (
    <StyledFooterSection3 className={classname}>
      <div className="col-about-content">
        <AboutCard classname="about-text" />
        <FooterLists
          listOne={aboutList}
          listTwo={developers2}
          listThree={developers1}
          doublelist={true}
          title1="About Us"
          title2="Our Developers"
          wrapperClass="about-lists-block"
          doubleListClass="list-developers"
        />
      </div>
    </StyledFooterSection3>
  );
};

export default FooterSection3;
