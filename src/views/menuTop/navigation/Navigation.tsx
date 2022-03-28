import React, { FC } from "react";
import { StyledResponsiveContainer } from "../../../components/containers/StyledResponsiveContainer";
import { useMenuOpenStore } from "../../../globalState/zustandStores/useMenuOpen";
import { useMobileStore } from "../../../globalState/zustandStores/useMobileStore";
import Bars from "./atoms/StyledBars";
import Logo from "./atoms/StyledLogo";
import NavList from "./molecules/navlist/NavList";
import { StyledNavWrapper, StyledOnBarMenu } from "./StyledNavigation";

const Navigation: FC = () => {
  const isMenuOpen = useMenuOpenStore((state: any) => state.menuOpen);
  const isMobile = useMobileStore((state: any) => state.isMobile);
  return (
    <StyledResponsiveContainer>
      <StyledNavWrapper className={`${isMobile ? "mobile" : ""} ${isMenuOpen ? "active" : ""} `}>
        <Logo />
        <StyledOnBarMenu>
          <NavList />
          <Bars />
        </StyledOnBarMenu>
      </StyledNavWrapper>
    </StyledResponsiveContainer>
  );
};

export default Navigation;
