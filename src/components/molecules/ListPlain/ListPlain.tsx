import React, { FC } from "react";
import { ListItemPlain } from "../../atoms/ListItemPlain";
import { StyledListPlain } from "./StyledListPlain";

interface Props {
  list: {
    title: string;
    path: string;
  }[];
  className?: string;
}

const ListPlain: FC<Props> = ({ list, className }) => {
  return (
    <StyledListPlain className={className}>
      {list.map((item, i) => (
        <ListItemPlain key={i} item={item.title} path={item.path} />
      ))}
    </StyledListPlain>
  );
};

export default ListPlain;
