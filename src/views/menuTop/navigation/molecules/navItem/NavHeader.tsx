import React, { FC } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { StyledHeaderWrapper } from "./StyledNavItem";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";

interface Props {
  item?: string;
  chevron?: boolean;
}

const NavHeader: FC<Props> = ({ item, chevron }) => {
  return (
    <StyledHeaderWrapper className="link-name">
      <StyledHeaderH4 label={item} fontSize="1.8rem" lineHeight="2.6rem" />
      {chevron && (
        <div className="chevrons">
          <HiOutlineChevronDown className="down" />
          <HiOutlineChevronUp className="up" />
        </div>
      )}
    </StyledHeaderWrapper>
  );
};

export default NavHeader;
