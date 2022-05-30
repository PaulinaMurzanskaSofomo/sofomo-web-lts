import React, { FC, MouseEvent } from "react";
import { theme } from "../../../themes/MainTheme";
import { developers } from "../../../assets/content/developers";
import { ListItem, List } from "../../../components/molecules";
import { Link } from "react-router-dom";
import { checkPng } from "../../../assets/icons";
import { StyledDropdownDisplay, StyledListOverlay } from "./StyledDropdownDisplay";

export interface DropdownProps {
  isActive?: boolean;
  selectedItem?: string;
  overlayActive?: boolean;
  handleActiveClass?: (e: MouseEvent) => void;
  handleOverlay?: (e: MouseEvent) => void;
}

export const DropdownDisplay: FC<DropdownProps> = ({
  isActive,
  selectedItem,
  overlayActive,
  handleActiveClass,
  handleOverlay,
}) => {
  return (
    <StyledDropdownDisplay>
      <List variant="dropdown-wrapper" className="grid-area-c" margin="0">
        {developers.map((item) => (
          <List
            variant="dropdown-outer"
            margin="0"
            isActive={isActive && selectedItem === item.id}
            id={item.id}
            key={item.id}
          >
            <ListItem
              id={item.id}
              listItem={item.type}
              variant="dropdown-plus-minus"
              onClick={handleActiveClass}
              dropdownActive={isActive && selectedItem === item.id}
              backgroundColor="white"
              cursorPointer
            />
            <List
              variant="in-dropdown"
              isActive={isActive && selectedItem === item.id}
              margin="0"
              id={item.id}
            >
              {item.role.map((item, i) => (
                <Link key={i} to={item.path}>
                  <ListItem
                    icon={checkPng}
                    listItem={item.title}
                    variant="icon-check-arr-dots"
                    hover
                    backgroundColor={theme.colors.white}
                  />
                </Link>
              ))}
            </List>
          </List>
        ))}
        <StyledListOverlay className={overlayActive ? "active" : ""} onClick={handleOverlay} />
      </List>
    </StyledDropdownDisplay>
  );
};
