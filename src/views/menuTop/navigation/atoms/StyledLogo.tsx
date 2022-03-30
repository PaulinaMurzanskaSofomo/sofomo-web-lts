import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sofomoLogo from "../../../../assets/logos/sofomo.svg";
import { HOME_PAGE } from "../../../../routes/routes";
import { useFullScreenMenuOpenStore } from "../../../../globalState/zustandStores/useMenuOpen";

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
  const isMenuDropped = useFullScreenMenuOpenStore((state: any) => state.toggleFullScreenMenu);

  const handleClick = () => {
    isMenuDropped(false);
  };
  return (
    <StyledLogoWrapper onClick={handleClick}>
      <Link to={HOME_PAGE}>
        <img src={sofomoLogo} alt="sofomo" />
      </Link>
    </StyledLogoWrapper>
  );
};

export default Logo;
