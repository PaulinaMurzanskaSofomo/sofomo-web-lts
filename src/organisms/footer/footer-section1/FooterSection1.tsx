import React, { FC } from "react";
import { StyledHeader } from "../../../components/atoms/headers";
import { theme } from "../../../themes/MainTheme";
import { sectionBlueHeader } from "../../../assets/content/footer/SectionAbout";
import { PartnersLogos } from "../../../components/molecules/parters_logos";
import { StyledFooterSection1 } from "./StyledFooterSection1";

interface Props {
  classname?: string;
}

const FooterSection1: FC<Props> = ({ classname }) => {
  return (
    <StyledFooterSection1 className={classname}>
      <div className="col-blue-content">
        <div className="content header">
          <StyledHeader
            fontSize="1.7rem"
            lineHeight="3rem"
            fontWeight="700"
            color={theme.colors.white}
          >
            {sectionBlueHeader}
          </StyledHeader>
        </div>
        <PartnersLogos classname="content icons" />
      </div>
    </StyledFooterSection1>
  );
};

export default FooterSection1;
