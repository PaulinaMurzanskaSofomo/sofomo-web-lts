import React, { FC } from "react";
import { useMenuOpenStore } from "../../../globalState/zustandStores/useMenuOpen";
import { useMobileStore } from "../../../globalState/zustandStores/useMobileStore";
import Bars from "./atoms/StyledBars";
import Logo from "./atoms/StyledLogo";
import NavList from "./organisms/navlist/NavList";
import { StyledNavWrapper, StyledOnBarMenu } from "./StyledNavigation";

const Navigation: FC = () => {
  const isMenuOpen = useMenuOpenStore((state: any) => state.menuOpen);
  const isMobile = useMobileStore((state: any) => state.isMobile);

  return (
    <StyledNavWrapper className={`${isMobile ? "mobile" : ""} ${isMenuOpen ? "active" : ""} `}>
      <Logo />
      <StyledOnBarMenu>
        <NavList />
        <Bars />
      </StyledOnBarMenu>
    </StyledNavWrapper>
  );
};

export default Navigation;
