import React, { FC } from "react";
import { Icon } from "../../atoms";
import { StyledSocials } from "./StyledSocials";

interface Props {
  className?: string;
  fontSize?: string;
  iconWidth?: string;
  socialsList: any;
}

export const Socials: FC<Props> = ({ className, fontSize, socialsList, iconWidth }) => {
  return (
    <StyledSocials className={className}>
      {socialsList.map((item: any) => (
        <Icon
          key={item.path}
          fontSize={fontSize}
          path={item.path}
          variant={item.variant}
          width={iconWidth}
        >
          {item.icon}
        </Icon>
      ))}
    </StyledSocials>
  );
};
