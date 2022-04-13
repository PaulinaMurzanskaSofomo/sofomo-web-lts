import React, { FC } from "react";
import { SocialIcon } from "../../atoms/SocialIcon";
import { StyledSocials } from "./StyledSocials";

interface Props {
  className?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  socialsList: any;
}

const Socials: FC<Props> = ({ className, fontSize, width, height, socialsList }) => {
  return (
    <StyledSocials className={className}>
      {socialsList.map((item: any) => (
        <SocialIcon
          key={item.path}
          width={width}
          height={height}
          fontSize={fontSize}
          fill={item.fill}
          bgr={item.bgr}
          fillHover={item.fillHover}
          path={item.path}
        >
          {item.icon}
        </SocialIcon>
      ))}
    </StyledSocials>
  );
};

export default Socials;
