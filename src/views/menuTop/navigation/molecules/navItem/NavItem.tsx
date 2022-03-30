import React, { FC } from "react";
import { StyledItem } from "./StyledNavItem";

import { NavLink } from "react-router-dom";
import NavHeader from "./NavHeader";
import ContentSwitch from "../../templates/ContentSwitchMobile";

interface Props {
  item: string;
  id?: number;
  path?: string;
  chevron?: boolean;
}

const NavItem: FC<Props> = ({ item, id, path, chevron }) => {
  return (
    <StyledItem>
      <NavLink to={path ? path : "/"}>
        <NavHeader item={item} chevron={chevron} />
        <ContentSwitch id={id} />
      </NavLink>
    </StyledItem>
  );
};

export default NavItem;
