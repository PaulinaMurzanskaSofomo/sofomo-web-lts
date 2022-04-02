import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { StyledSocials } from "./StyledSocials";

const Socials = () => {
  return (
    <StyledSocials className="socials">
      <a href="https://www.facebook.com/Sofomo-131919800556137/" target="_blank">
        <div className="icon fs">
          <FaFacebookF />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQElU3Q1aZL_ygAAAX_pG7bwzTw-NI5aiqEkypuDSnAbiSgF7i_glDfRKPHuGzK1fDVbL-5PA8axCtV_gxOsn6g4DFuxW1phvXkbivNwRXwpsx8gc9A1chPDYaS86o8ODI9Ak-0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsofomo%2F"
        target="_blank"
      >
        <div className="icon lk-in">
          <div className="lk-inner">
            <GrLinkedinOption />
          </div>
        </div>
      </a>
    </StyledSocials>
  );
};

export default Socials;
