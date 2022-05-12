import React, { FC } from "react";
import { Label } from "../../atoms";
import { Socials } from "../Socials";
import { StyledCard, StyledCardBody, StyledHeading } from "./StyledCard";

interface Props {
  variant?: "medium" | "small-const" | "large-const" | "large";
  children?: any;
  className?: string;
  headingColor?: string;
  socialIconsList?: any;
  title?: string;
  width?: string;
  height?: string;
  label?: string;
  hover?: boolean;
  id?: string;
}
export const Card: FC<Props> = ({
  headingColor,
  socialIconsList,
  className,
  title,
  width,
  height,
  children,
  label,
  variant,
  hover,
  id,
}) => {
  return (
    <StyledCard
      className={`${variant} ${hover ? "hovered" : ""} ${className}`}
      width={width}
      height={height}
      id={id}
    >
      <StyledHeading className={variant} headingColor={headingColor}>
        {title}
        {label && <Label label={label} />}
      </StyledHeading>
      <StyledCardBody>
        {children}
        {socialIconsList && <Socials socialsList={socialIconsList} />}
      </StyledCardBody>
    </StyledCard>
  );
};
