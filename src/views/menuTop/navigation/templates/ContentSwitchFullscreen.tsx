import React, { FC } from "react";
import Developers from "../molecules/developers/Developers";
import WhatWeDo from "../molecules/whatWeDo/WhatWeDo";
import { StyledFullDisplay } from "./StyledContentSwitch";

interface Props {
  id?: number;
  active?: boolean;
}

const ContentSwitchFullscreen: FC<Props> = ({ id }) => {
  const conditionForFullScreenDisplay = true;
  const idFromStateOfSelectedItem1 = 1;
  return (
    <StyledFullDisplay className={conditionForFullScreenDisplay ? "menu-dropped" : ""}>
      {(() => {
        switch (2) {
          // case 1:
          //   return <WhatWeDo />;
          case 2:
            return <Developers />;
          default:
            return;
        }
      })()}
    </StyledFullDisplay>
  );
};

export default ContentSwitchFullscreen;
