import React, { FC, useState } from "react";
import { StyledItem, StyledChevronBox } from "./StyledNavItem";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import ContentSwitch from "../../templates/ContentSwitch";

interface Props {
  item: string;
  chevron?: boolean;
  id?: number;
}

const NavItem: FC<Props> = ({ item, chevron, id }) => {
  const [isItemActive, setIsItemActive] = useState(false);
  return (
    <>
      <StyledItem>
        {item}
        {chevron && (
          <StyledChevronBox>
            <HiOutlineChevronDown className="down" />
            <HiOutlineChevronUp className="up" />
          </StyledChevronBox>
        )}
      </StyledItem>
      <ContentSwitch id={id} active={isItemActive} />
    </>
  );
};

export default NavItem;
