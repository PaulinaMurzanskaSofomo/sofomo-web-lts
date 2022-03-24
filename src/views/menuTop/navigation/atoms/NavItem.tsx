import React, { FC } from "react";
import { StyledItem, StyledChevronBox } from "./StyledAtoms";
import chevronUp from "../../../../assets/icons/chevronUp.svg";
import chevronDown from "../../../../assets/icons/chevronDown.svg";

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
          <img src={chevronDown} className="down" alt="" />
          <img src={chevronUp} className="up" alt="" />
        </StyledChevronBox>
      )}
    </StyledItem>
  );
};

export default NavItem;
