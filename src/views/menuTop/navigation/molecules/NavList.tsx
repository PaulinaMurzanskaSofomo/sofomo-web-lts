import React, { FC } from "react";
import { mainMenu } from "../../../../assets/content/navMenu/mainMenu";
import NavItem from "../atoms/NavItem";
import { StyledList } from "./StyledMolecules";
import { useMenuOpenStore } from "../../../../globalState/zustandStores/useMenuOpen";

const NavList: FC = () => {
  const isMenuOpen = useMenuOpenStore((state: any) => state.menuOpen);
  return (
    <StyledList className={isMenuOpen ? "active" : ""}>
      {mainMenu.map((item) => (
        <NavItem item={item.title} key={item.id} chevron={item.chevron} />
      ))}
    </StyledList>
  );
};

export default NavList;
