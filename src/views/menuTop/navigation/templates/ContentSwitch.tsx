import React, { FC } from "react";
import Developers from "../molecules/developers/Developers";
import WhatWeDo from "../molecules/whatWeDo/WhatWeDo";

interface Props {
  id?: number;
  active?: boolean;
}

const ContentSwitch: FC<Props> = ({ id, active }) => {
  return (
    <>
      {(() => {
        switch (id) {
          case 1:
            return <WhatWeDo active={active} />;
          case 2:
            return <Developers active={active} />;
          default:
            return;
        }
      })()}
    </>
  );
};

export default ContentSwitch;
