import React, { FC, useState, useEffect } from "react";
import { mainMenu } from "../../../../../assets/content/navMenu/mainMenu";
import { useMenuOpenStore } from "../../../../../globalState/zustandStores/useMenuOpen";
import { useMobileStore } from "../../../../../globalState/zustandStores/useMobileStore";
import NavItem from "../../molecules/navItem/NavItem";
import ContentSwitch from "../../templates/ContentSwitch";
import { StyledNavList } from "./StyledNavList";

const NavList: FC = () => {
  const isMenuOpen = useMenuOpenStore((state: any) => state.menuOpen);
  const isMobile = useMobileStore((state: any) => state.isMobile);
  const setMobile = useMobileStore((state: any) => state.setMobile);

  const windowSize = window.innerWidth;
  const [myWindow, setMyWindow] = useState(windowSize);
  const smallScreen = () => {
    if (myWindow < 1094) {
      setMobile(true);
    } else setMobile(false);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      const resizedWindow = window.innerWidth;
      setMyWindow(resizedWindow);
    });
    smallScreen();
  }, [myWindow]);

  return (
    <StyledNavList className={`${isMobile ? "mobile" : ""} ${isMenuOpen ? "active" : ""} `}>
      {mainMenu.map((item) => (
        <NavItem item={item.title} key={item.id} chevron={item.chevron} id={item.id} />
      ))}
    </StyledNavList>
  );
};

export default NavList;
