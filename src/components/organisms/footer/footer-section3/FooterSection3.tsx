import React, { FC } from "react";
import { AboutCard } from "../../../molecules/about-card-small";
import { ListFooter } from "../../../molecules/list-footer";
import {
  aboutList,
  developers1,
  developers2,
} from "../../../../assets/content/footer/SectionAbout";
import { StyledFooterSection3 } from "./StyledFooterSection3";

interface Props {
  classname?: string;
}

const FooterSection3: FC<Props> = ({ classname }) => {
  return (
    <StyledFooterSection3 className={classname}>
      <div className="col-about-content">
        <div className="about-text">
          <AboutCard />
        </div>
        <div className="about-lists-block">
          <div className="list-about">
            <ListFooter list={aboutList} list2={developers2} title="About Us" />
          </div>
          <div className="list-devs">
            <ListFooter
              title="Our Developers"
              list={developers1}
              list2={developers2}
              doublelist={true}
              classname="list-developers"
            />
          </div>
        </div>
      </div>
    </StyledFooterSection3>
  );
};

export default FooterSection3;
