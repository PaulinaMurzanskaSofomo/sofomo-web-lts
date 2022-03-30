import React, { FC, useRef, useState } from "react";
import { StyledItem } from "./StyledNavItem";
import { NavLink } from "react-router-dom";
import NavHeader from "./NavHeader";
import ContentSwitch from "../../templates/ContentSwitchMobile";
import { useSelectedNavlink } from "../../../../../globalState/zustandStores/useSelectedNavlink";
import { useFullScreenMenuOpenStore } from "../../../../../globalState/zustandStores/useMenuOpen";

interface Props {
  item: string;
  id?: number;
  path?: string;
  chevron?: boolean;
}

const NavItem: FC<Props> = ({ item, id, path, chevron }) => {
  const setId = useSelectedNavlink((state: any) => state.setSelectedItemId);
  const isMenuDropped = useFullScreenMenuOpenStore((state: any) => state.toggleFullScreenMenu);

  const handleMenuDropdown = (e: any) => {
    const target = e.currentTarget;
    setId(target.value);
    const displayEl = document.querySelector(".display");
    const navlinkEl = document.querySelector(`.navlink${id}`);

    if (displayEl?.classList.contains("menu-dropped") && navlinkEl?.classList.contains("active")) {
      isMenuDropped(false);
      navlinkEl?.classList.remove("active");
    } else {
      isMenuDropped(true);
      navlinkEl?.classList.add("active");
    }
  };

  return (
    <StyledItem onClick={handleMenuDropdown} value={id}>
      <NavLink to={path ? path : "/"} className={`navlink${id}`}>
        <NavHeader item={item} chevron={chevron} />
        <ContentSwitch id={id} />
      </NavLink>
    </StyledItem>
  );
};

export default NavItem;
