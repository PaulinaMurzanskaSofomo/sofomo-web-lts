import React from "react";
import { FacebookIcon } from "../../atoms/facebook-icon";
import { LinkedInIcon } from "../../atoms/linkedIn-icon";
import { StyledSocials } from "./StyledSocials";

const Socials = () => {
  return (
    <StyledSocials className="socials">
      <FacebookIcon />
      <LinkedInIcon />
    </StyledSocials>
  );
};

export default Socials;
