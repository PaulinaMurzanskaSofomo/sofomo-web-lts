import React, { FC } from "react";
import { StyledBarsWrapper } from "./StyledAtoms";
import bars from "../../../../assets/icons/Menu.svg";

const Bars: FC = () => {
  return (
    <StyledBarsWrapper>
      <img src={bars} alt="" />
    </StyledBarsWrapper>
  );
};

export default Bars;
