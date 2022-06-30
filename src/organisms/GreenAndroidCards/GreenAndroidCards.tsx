import React from "react";
import { Image, SectionContainer, Typography } from "../../components/atoms";
import { Card } from "../../components/molecules";
import { cards } from "../../data/content/android/cards";
import { greenCards } from "../../data/content/android/greenCards";
import { theme } from "../../themes/MainTheme";
import { StyledAndroidCards, StyledCardWrapper } from "./StyledGreenAndroidCard";

export const GreenAndroidCards = () => {
  return (
    <SectionContainer background={theme.colors.green}>
      <StyledAndroidCards>
        <Typography variant="heading_9" color={theme.colors.white} fontWeight="700">
          Getting started is easy
        </Typography>
        {greenCards.map((card) => (
          <StyledCardWrapper>
            <Image src={card.icon} alt="green-card" />
            {/* <Card variant="" title={card.title}>
              {card.text}
            </Card> */}
          </StyledCardWrapper>
        ))}
      </StyledAndroidCards>
    </SectionContainer>
  );
};
