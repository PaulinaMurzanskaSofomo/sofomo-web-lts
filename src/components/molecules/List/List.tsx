import React, { FC } from "react";
import { ListVariants } from "../../../types/listTypes";
import { StyledList } from "./StyledList";

interface Props {
  variant: ListVariants;
  children?: any;
  isActive?: boolean;
  className?: string;
  margin?: string;
  onMouseLeave?: VoidFunction;
  onClick?: (e: any) => void;
  id?: string;
}

export const List: FC<Props> = ({
  variant,
  children,
  isActive,
  className,
  margin,
  id,
  onMouseLeave,
  onClick,
}) => {
  return (
    <StyledList
      className={`${variant} ${className} ${isActive ? "active" : ""}`}
      margin={margin}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      id={id}
    >
      {children}
    </StyledList>
  );
};
