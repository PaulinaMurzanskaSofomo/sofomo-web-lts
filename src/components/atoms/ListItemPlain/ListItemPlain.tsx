import React, { FC } from "react";
import { classes } from "../../../utils/classes/classes";
import { theme } from "../../../themes/MainTheme";
import Typography from "../Typography/Typography";
import { StyledListItemPlain } from "./StyledListItemPlain";

interface Props {
  item: string;
  path?: string;
}

const ListItemPlain: FC<Props> = ({ item, path }) => {
  return (
    <StyledListItemPlain href={path} target="_blank">
      <Typography className={classes.p.mediumPaleHoverP}>{item}</Typography>
    </StyledListItemPlain>
  );
};

export default ListItemPlain;
