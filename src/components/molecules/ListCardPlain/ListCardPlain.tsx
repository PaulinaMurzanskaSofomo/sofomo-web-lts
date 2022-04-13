import React, { FC } from "react";
import { classes } from "../../../utils/classes/classes";
import { Typography } from "../../atoms/Typography";
import { ListPlain } from "../ListPlain";
import { StyledListCardPlain, StyledListsWrapper } from "./StyledListCardPlain";

interface Props {
  title: string;
  list: {
    title: string;
    path: string;
  }[];
  list2?: any; //type:any as this prop is optional, and don't know how to avoid type error.
  shouldBeSecondList?: boolean;
}

const ListCardPlain: FC<Props> = ({ title, list, list2, shouldBeSecondList }) => {
  return (
    <StyledListCardPlain>
      <Typography as="h6" className={classes.h.listsDarkH6}>
        {title}
      </Typography>
      <StyledListsWrapper>
        <ListPlain list={list} />
        {shouldBeSecondList && <ListPlain list={list2} />}
      </StyledListsWrapper>
    </StyledListCardPlain>
  );
};

export default ListCardPlain;
