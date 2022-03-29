import React, { FC } from "react";
import { StyledItem } from "./StyledNavItem";
import ContentSwitch from "../../templates/ContentSwitch";
import { NavLink } from "react-router-dom";
import NavHeader from "./NavHeader";

interface Props {
  item: string;
  id?: number;
  path?: string;
}

const NavItem: FC<Props> = ({ item, id, path }) => {
  return (
    <StyledItem>
      <NavLink to={path ? path : "/"}>
        <NavHeader item={item} />
        <ContentSwitch id={id} />
      </NavLink>
    </StyledItem>
  );
};

export default NavItem;
