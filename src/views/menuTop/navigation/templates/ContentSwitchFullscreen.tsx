import React, { FC } from "react";
import { useFullScreenMenuOpenStore } from "../../../../globalState/zustandStores/useMenuOpen";
import { useSelectedNavlink } from "../../../../globalState/zustandStores/useSelectedNavlink";
import Developers from "../molecules/developers/Developers";
import WhatWeDo from "../molecules/whatWeDo/WhatWeDo";
import { StyledFullDisplay } from "./StyledContentSwitch";

const ContentSwitchFullscreen: FC = () => {
  const isMenuDropped = useFullScreenMenuOpenStore((state: any) => state.fullScreenMenuOpen);
  const selectedId = useSelectedNavlink((state: any) => state.selectedItemId);

  return (
    <StyledFullDisplay className={`display ${isMenuDropped ? "menu-dropped" : ""}`}>
      {(() => {
        switch (selectedId) {
          case 1:
            return <WhatWeDo />;
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
