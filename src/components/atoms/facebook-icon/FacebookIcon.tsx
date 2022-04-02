import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { StyledFacebookIcon } from "./StyledFacebookIcon";

const FacebookIcon = () => {
  return (
    <StyledFacebookIcon href="https://www.facebook.com/Sofomo-131919800556137/" target="_blank">
      <div className="icon fs">
        <FaFacebookF />
      </div>
    </StyledFacebookIcon>
  );
};

export default FacebookIcon;
