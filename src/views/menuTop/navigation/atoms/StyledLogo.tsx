import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sofomoLogo from "../../../../assets/logos/sofomo.svg";
import { HOME_PAGE } from "../../../../routes/routes";

export const StyledLogoWrapper = styled.div`
  width: 10.3rem;
  height: 2.3rem;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

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
