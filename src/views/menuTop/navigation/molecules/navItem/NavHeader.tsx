import React, { FC } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { StyledHeaderWrapper } from "./StyledNavItem";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";

interface Props {
  item?: string;
}

const NavHeader: FC<Props> = ({ item }) => {
  return (
    <StyledHeaderWrapper className="link-name">
      <StyledHeaderH4 label={item} fontSize="1.8rem" lineHeight="2.6rem" />
      <div className="chevrons">
        <HiOutlineChevronDown className="down" />
        <HiOutlineChevronUp className="up" />
      </div>
    </StyledHeaderWrapper>
  );
};

export default NavHeader;