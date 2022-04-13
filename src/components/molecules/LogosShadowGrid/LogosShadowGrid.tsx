import React, { FC } from "react";
import { partnersLogosList } from "../../../assets/logos/partners/logosList";
import { ImageContainer } from "../../atoms/ImageContainer";
import { StyledLogosShadowGrid } from "./StyledLogosShadowGrid";

const LogosShadowGrid: FC = () => {
  return (
    <StyledLogosShadowGrid>
      {partnersLogosList.map((item, i) => (
        <ImageContainer className="logo">
          <img src={item} alt="logo" />
        </ImageContainer>
      ))}
    </StyledLogosShadowGrid>
  );
};

export default LogosShadowGrid;
