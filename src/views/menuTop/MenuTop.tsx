import React, { FC } from "react";
import Navigation from "./navigation/Navigation";
import { StyledMenuWrapper } from "./StyledMenuTop";
import ContentSwitchFullscreen from "./navigation/templates/ContentSwitchFullscreen";

const MenuTop: FC = () => {
  const conditionForFullScreenDisplay = true;
  const idFromStateOfSelectedItem = 1;
  //it should get true , when nav link class is active- try to get in with useRef.
  return (
    <StyledMenuWrapper>
      <Navigation />
      <ContentSwitchFullscreen />
    </StyledMenuWrapper>
  );
};

export default MenuTop;
