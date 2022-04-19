import React, { FC } from "react";
import { theme } from "../../themes/MainTheme";
import { StyledSectionContainer } from "../../components/atoms/SectionContainer";
import { Typography } from "../../components/atoms/Typography";
import { LogosShadowGrid } from "../../components/molecules/LogosShadowGrid";
import { AddressCard } from "../../components/molecules/AddressCard";
import { offices } from "../../assets/content/footer/Offices";
import { Card } from "../../components/molecules/Card";
import { FooterLists } from "../../components/molecules/FooterLists";
import { aboutList, developers1, developers2 } from "../../assets/content/footer/SectionAbout";
import { StyledSpan, StyledSection, StyledGridCards, StyledGridLists } from "./StyledFooter";
import sideImage from "../../assets/images/footer/CirclesImage.svg";
import { partnersLogosList } from "../../assets/logos/partners/logosList";
import { StyledFooter, StyledSideImage } from "./StyledFooter";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledSectionContainer background={theme.colors.backgroudBlue}>
        <StyledSection>
          <Typography as="h3" color={theme.colors.white} weight="700" fontBase={[2, 2.8]}>
            Companies big and small alike choose Sofomo as their development partner
          </Typography>
          <LogosShadowGrid logosList={partnersLogosList} />
        </StyledSection>
      </StyledSectionContainer>
      <StyledSectionContainer>
        <StyledGridCards>
          {offices.map((office, i) => (
            <AddressCard
              className="grid-area"
              key={i}
              country={office.country}
              data={office.data}
              avatar={office.avatar}
              headquarter={office.headquarter}
            />
          ))}
        </StyledGridCards>
        <StyledGridLists>
          <Card
            className="grid-area-a"
            withSocials
            title="About Us"
            text="We build & support your own talented, trusted, full-time development team hosted out of Sofomo’s headquarters in Poland."
          />
          <FooterLists
            className="grid-area-b"
            listOne={aboutList}
            listTwo={developers1}
            listThree={developers2}
            title1="About Us"
            title2="Our Developers"
          />
        </StyledGridLists>
        <StyledSpan>© All rights reserved Sofomo 2020</StyledSpan>
      </StyledSectionContainer>
      <StyledSideImage className="side-image">
        <img src={sideImage} alt="side" />
      </StyledSideImage>
    </StyledFooter>
  );
};

export default Footer;
