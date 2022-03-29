import React, { FC } from "react";
import Developers from "../molecules/developers/Developers";
import WhatWeDo from "../molecules/whatWeDo/WhatWeDo";
import { StyledContentSwitch } from "./StyledContentSwitch";

interface Props {
  id?: number;
  active?: boolean;
}

const ContentSwitch: FC<Props> = ({ id }) => {
  return (
    <StyledContentSwitch className="content-switch">
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
    </StyledContentSwitch>
  );
};

export default ContentSwitch;
