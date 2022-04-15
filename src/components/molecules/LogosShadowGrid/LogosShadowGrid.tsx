import React, { FC } from "react";
import { ImageContainer } from "../../atoms/ImageContainer";
import { StyledLogosShadowGrid } from "./StyledLogosShadowGrid";

interface Props {
  logosList: string[];
}

const LogosShadowGrid: FC<Props> = ({ logosList }) => {
  return (
    <StyledLogosShadowGrid>
      {logosList.map((item, i) => (
        <ImageContainer className="logo">
          <img src={item} alt="logo" />
        </ImageContainer>
      ))}
    </StyledLogosShadowGrid>
  );
};

export default LogosShadowGrid;
