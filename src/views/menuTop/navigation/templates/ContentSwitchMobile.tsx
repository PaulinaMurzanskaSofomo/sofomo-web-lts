import React, { FC } from "react";
import Developers from "../molecules/developers/Developers";
import WhatWeDo from "../molecules/whatWeDo/WhatWeDo";
import { StyledMobileDisplay } from "./StyledContentSwitch";

interface Props {
  id?: number;
  active?: boolean;
}

const ContentSwitch: FC<Props> = ({ id, active }) => {
  return (
    <StyledMobileDisplay className={`content-switch ${active ? "active" : ""}`}>
      {(() => {
        switch (id) {
          case 1:
            return <WhatWeDo />;
          case 2:
            return <Developers />;
          default:
            return;
        }
      })()}
    </StyledMobileDisplay>
  );
};

export default ContentSwitch;
