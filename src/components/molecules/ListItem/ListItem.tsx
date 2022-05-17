import React, { FC } from "react";
import { arrowRightDotted, minus, plus } from "../../../assets/icons";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { Image } from "../../atoms";
import { ListItemVariants } from "../../../types/listItemTypes";
import { theme } from "../../../themes/MainTheme";
import {
  StyledIcon,
  StyledIconAfter,
  StyledItem,
  StyledItemWrapper,
  StyledChevrons,
} from "./StyledListItem";

export interface Props {
  variant: ListItemVariants;
  itemColor?: string;
  hover?: boolean;
  as?: any;
  path?: string;
  dropdownActive?: boolean;
  onClick?: (e: any) => void;
  listItem: string;
  itemWidth?: string;
  backgroundColor?: string;
  hoverWeight?: string;
  margin?: string;
  id?: string;
  iconWidth?: string;
  icon?: string;
  iconMargin?: string;
  className?: string;
  cursorPointer?: boolean;
}

export const ListItem: FC<Props> = ({
  as,
  cursorPointer,
  backgroundColor,
  className,
  dropdownActive,
  hover,
  hoverWeight,
  icon,
  iconMargin,
  iconWidth,
  id,
  itemColor,
  itemWidth,
  listItem,
  margin,
  onClick,
  path,
  variant,
}) => {
  const displayClassName = `${variant} ${hover ? "hovered" : ""}`;

  const lastIndicator = () => {
    if (variant === "icon-check-arr-dots") {
      return arrowRightDotted;
    }
    if (variant === "dropdown-plus-minus") {
      if (dropdownActive === true) {
        return minus;
      } else return plus;
    }
  };

  return (
    <StyledItemWrapper
      id={id}
      onClick={onClick}
      data-path={path}
      as={as}
      className={`list-item ${displayClassName} ${className}`}
      itemWidth={itemWidth}
      backgroundColor={backgroundColor}
      hoverWeight={hoverWeight}
      margin={margin}
      cursorPointer={cursorPointer}
    >
      {icon && (
        <StyledIcon className={variant} iconWidth={iconWidth} iconMargin={iconMargin}>
          <img src={icon} alt="icon" />
        </StyledIcon>
      )}
      <StyledItem
        color={itemColor}
        className={`${displayClassName} ${dropdownActive ? "active" : ""}`}
      >
        {listItem}
      </StyledItem>
      <StyledIconAfter className={`${displayClassName} last ${dropdownActive ? "active" : ""}`}>
        {variant !== "dropdown-chevrons" && <Image src={lastIndicator()} alt="icon" />}
        {variant === "dropdown-chevrons" && (
          <StyledChevrons className={`${displayClassName} last ${dropdownActive ? "active" : ""}`}>
            <HiOutlineChevronDown className="down" />
            <HiOutlineChevronUp className="up" />
          </StyledChevrons>
        )}
      </StyledIconAfter>
    </StyledItemWrapper>
  );
};
ListItem.defaultProps = {
  backgroundColor: "none",
  hoverWeight: "400",
  iconMargin: "0 1rem 0 0",
  iconWidth: "1.6rem",
  itemColor: theme.colors.gray500,
  itemWidth: "100%",
  margin: "0",
};
