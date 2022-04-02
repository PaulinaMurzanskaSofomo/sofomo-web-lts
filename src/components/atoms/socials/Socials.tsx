import React from "react";
import { FacebookIcon } from "../facebook-icon";
import { LinkedInIcon } from "../linkedIn-icon";
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
