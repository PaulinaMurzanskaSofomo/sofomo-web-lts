import React, { FC } from "react";
import { StyledBarsWrapper } from "./StyledAtoms";
import bars from "../../../../assets/icons/Menu.svg";
import { useMenuOpenStore } from "../../../../globalState/zustandStores/useMenuOpen";

const Bars: FC = () => {
  const toggleMenu = useMenuOpenStore((state: any) => state.toggleMenu);
  return (
    <StyledBarsWrapper onClick={toggleMenu}>
      <img src={bars} alt="" />
    </StyledBarsWrapper>
  );
};

export default Bars;
