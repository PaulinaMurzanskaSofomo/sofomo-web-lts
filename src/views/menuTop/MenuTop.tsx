import React, { FC } from "react";
import Navigation from "./navigation/Navigation";
import { StyledMenuWrapper } from "./StyledMenuTop";
import ContentSwitchFullscreen from "./navigation/templates/ContentSwitchFullscreen";

const MenuTop: FC = () => {
  return (
    <StyledMenuWrapper>
      <Navigation />
      <ContentSwitchFullscreen />
    </StyledMenuWrapper>
  );
};

export default MenuTop;
