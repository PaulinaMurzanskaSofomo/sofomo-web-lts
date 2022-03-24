import React, { FC } from "react";
import MenuDropdown from "./menuDropdown/MenuDropdown";
import Navigation from "./navigation/Navigation";
import { StyledMenuWrapper } from "./StyledMenuTop";

const MenuTop: FC = () => {
  return (
    <StyledMenuWrapper>
      <Navigation />
      <MenuDropdown />
    </StyledMenuWrapper>
  );
};

export default MenuTop;
