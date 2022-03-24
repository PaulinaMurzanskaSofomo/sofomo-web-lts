import React, { FC } from "react";
import { Link } from "react-router-dom";
import sofomoLogo from "../../../../assets/logos/sofomo.svg";
import { StyledLogoWrapper } from "./StyledAtoms";
import { HOME_PAGE } from "../../../../routes/routes";

const Logo: FC = () => {
  return (
    <StyledLogoWrapper>
      <Link to={HOME_PAGE}>
        <img src={sofomoLogo} alt="sofomo" />
      </Link>
    </StyledLogoWrapper>
  );
};

export default Logo;
