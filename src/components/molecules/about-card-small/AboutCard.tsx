import React, { FC } from "react";
import { StyledAboutCard } from "./StyledAboutCard";
import { about, aboutText } from "../../../assets/content/footer/SectionAbout";
import { StyledHeader } from "../../atoms/headers";
import { StyledParagraph } from "../../atoms/paragraph";
import { theme } from "../../../themes/MainTheme";
import { Socials } from "../socials";

const AboutCard: FC = () => {
  return (
    <StyledAboutCard>
      <StyledHeader transform="capitalize" fontWeight="700" className="header">
        {about}
      </StyledHeader>
      <div className="text-block">
        <StyledParagraph fontSize="1.4rem" color={theme.colors.fontLightGrey}>
          {aboutText}
        </StyledParagraph>
      </div>
      <Socials />
    </StyledAboutCard>
  );
};

export default AboutCard;
