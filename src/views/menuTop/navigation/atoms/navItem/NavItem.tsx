import React, { FC } from "react";
import { StyledItem, StyledChevronBox } from "./StyledNavItem";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

interface Props {
  item: string;
  chevron?: boolean;
}

const NavItem: FC<Props> = ({ item, chevron }) => {
  return (
    <StyledItem>
      {item}
      {chevron && (
        <StyledChevronBox>
          <HiOutlineChevronDown className="down" />
          <HiOutlineChevronUp className="up" />
        </StyledChevronBox>
      )}
    </StyledItem>
  );
};

export default NavItem;
