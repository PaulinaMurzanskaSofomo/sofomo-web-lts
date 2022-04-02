import React, { FC } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { StyledLinkedInIcon } from "./StyledLinkedInIcon";

const LinkedInIcon: FC = () => {
  return (
    <StyledLinkedInIcon
      href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQElU3Q1aZL_ygAAAX_pG7bwzTw-NI5aiqEkypuDSnAbiSgF7i_glDfRKPHuGzK1fDVbL-5PA8axCtV_gxOsn6g4DFuxW1phvXkbivNwRXwpsx8gc9A1chPDYaS86o8ODI9Ak-0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsofomo%2F"
      target="_blank"
    >
      <div className="icon lk-in">
        <div className="lk-inner">
          <GrLinkedinOption />
        </div>
      </div>
    </StyledLinkedInIcon>
  );
};

export default LinkedInIcon;
