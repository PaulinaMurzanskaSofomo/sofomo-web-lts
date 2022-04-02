import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { StyledSocials } from "./StyledSocials";

const Socials = () => {
  return (
    <StyledSocials className="socials">
      <div className="icon fs">
        <FaFacebookF />
      </div>
      <div className="icon lk-in">
        <div className="lk-inner">
          <GrLinkedinOption />
        </div>
      </div>
    </StyledSocials>
  );
};

export default Socials;
