import React, { FC, useState } from "react";
import { StyledItem, StyledChevronBox, StyledItemOuter } from "./StyledNavItem";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import ContentSwitch from "../../templates/ContentSwitch";

interface Props {
  item: string;
  chevron?: boolean;
  id?: number;
}

const NavItem: FC<Props> = ({ item, chevron, id }) => {
  const [isItemActive, setIsItemActive] = useState(false);

  const toggleItemContent = (e: any) => {
    const target = e.currentTarget.id;
    setIsItemActive(!isItemActive);
  };
  return (
    <StyledItemOuter className={isItemActive ? "active" : ""}>
      <StyledItem onClick={toggleItemContent} className={isItemActive ? "active" : ""}>
        <StyledHeaderH4 label={item} fontSize="1.8rem" lineHeight="2.6rem" />
        {chevron && (
          <StyledChevronBox>
            <HiOutlineChevronDown className={`down ${isItemActive ? "active" : ""}`} />
            <HiOutlineChevronUp className={`up ${isItemActive ? "active" : ""}`} />
          </StyledChevronBox>
        )}
      </StyledItem>
      <ContentSwitch id={id} active={isItemActive} />
    </StyledItemOuter>
  );
};

export default NavItem;
