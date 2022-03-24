import React, { FC } from "react";
import { StyledResponsiveContainer } from "../../../components/containers/StyledResponsiveContainer";
import Bars from "./atoms/Bars";
import Logo from "./atoms/Logo";
import NavList from "./molecules/NavList";
import { StyledNavWrapper, StyledOnBarMenu } from "./StyledNavigation";

const Navigation: FC = () => {
  return (
    <StyledResponsiveContainer>
      <StyledNavWrapper>
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
