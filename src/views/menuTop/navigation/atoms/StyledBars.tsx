import React, { FC } from "react";
import bars from "../../../../assets/icons/Menu.svg";
import styled from "styled-components";
import { useMenuOpenStore } from "../../../../globalState/zustandStores/useMenuOpen";

export const StyledBarsWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  display: block;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1094px) {
    display: none;
  }
`;
const Bars: FC = () => {
  const toggleMenu = useMenuOpenStore((state: any) => state.toggleMenu);
  return (
    <StyledBarsWrapper onClick={toggleMenu}>
      <img src={bars} alt="" />
    </StyledBarsWrapper>
  );
};

export default Bars;
