import React, { FC } from "react";
import { mainMenu } from "../../../../assets/content/navMenu/mainMenu";
import NavItem from "../atoms/NavItem";
import { StyledList } from "./StyledMolecules";

const NavList: FC = () => {
  return (
    <StyledList>
      {mainMenu.map((item) => (
        <NavItem item={item.title} key={item.id} chevron={item.chevron} />
      ))}
    </StyledList>
  );
};

export default NavList;
