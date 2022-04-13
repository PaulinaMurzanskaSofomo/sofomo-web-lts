import React, { FC } from "react";
import { theme } from "../../../themes/MainTheme";
import { Socials } from "../Socials";
import { socialIconsList } from "../../../assets/icons/socialIconsList";
import { StyledCard } from "./StyledCard";
import Typography from "../../atoms/Typography/Typography";
import { classes } from "../../../utils/classes/classes";

interface Props {
  className?: string;
  title: string;
  text: string;
  withSocials?: boolean;
  width?: string;
  height?: string;
}
const Card: FC<Props> = ({ className, text, title, withSocials, width, height }) => {
  return (
    <StyledCard className={className} width={width} height={height}>
      <Typography as="h6" className={classes.h.listsDarkH6} margin="0 0 2rem 0">
        {title}
      </Typography>
      <Typography className={classes.p.mediumPaleP}>{text}</Typography>
      {withSocials && <Socials socialsList={socialIconsList} />}
    </StyledCard>
  );
};

export default Card;