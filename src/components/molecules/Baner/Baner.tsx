import React, { FC, ReactNode } from "react";
import { TypographyTypes } from "../../../types/typographyTypes";
import { Typography, SectionContainer } from "../../atoms";
import { StyledBaner, StyledSection, StyledBanerImage, StyledChildren } from "./StyledBaner";

interface Props {
  image?: string;
  imageOuter?: boolean;
  imageInner?: boolean;
  title?: string;
  backgroundColor?: string;
  titleVariant: TypographyTypes;
  titleColor?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export const Baner: FC<Props> = ({
  image,
  title,
  backgroundColor,
  imageOuter,
  imageInner,
  titleVariant,
  titleColor,
  subtitle,
  children,
  className,
}) => {
  return (
    <SectionContainer background={backgroundColor}>
      <StyledBaner className={className}>
        <StyledSection className={`${imageOuter ? "image-outer" : "image-inner"}`}>
          <Typography variant={titleVariant} as="h3" color={titleColor} bold>
            {title}
          </Typography>
          {subtitle && <Typography variant={"font-13 to-15-to-17"}>{subtitle}</Typography>}
          <StyledChildren className="grid-area">{children}</StyledChildren>
          {imageInner && (
            <StyledBanerImage className="grid-area inner">
              <img src={image} alt="baner" />
            </StyledBanerImage>
          )}
        </StyledSection>
        {imageOuter && (
          <StyledBanerImage className="grid-area outer">
            <img src={image} alt="baner" />
          </StyledBanerImage>
        )}
      </StyledBaner>
    </SectionContainer>
  );
};
