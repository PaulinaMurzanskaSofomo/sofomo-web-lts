import React, { FC } from "react";
import { StyledSocialIcon } from "./StyledSocialIcon";

interface Props {
  fill?: string;
  bgr?: string;
  fillHover?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  path?: string;
}

const SocialIcon: FC<Props> = ({
  fill,
  bgr,
  fillHover,
  fontSize,
  width,
  height,
  path,
  children,
}) => {
  return (
    <StyledSocialIcon
      href={path}
      target="_blank"
      fill={fill}
      bgr={bgr}
      fillHover={fillHover}
      fontSize={fontSize}
      width={width}
      height={height}
    >
      {children}
    </StyledSocialIcon>
  );
};

export default SocialIcon;
