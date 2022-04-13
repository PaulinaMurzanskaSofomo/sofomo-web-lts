import React, { FC } from "react";
import { ListCardPlain } from "../ListCardPlain";
import { StyledFooterLists } from "./StyledFooterLists";

interface Props {
  listOne: {
    title: string;
    path: string;
  }[];
  listTwo: {
    title: string;
    path: string;
  }[];
  listThree: {
    title: string;
    path: string;
  }[];
  title1: string;
  title2: string;
  doubleListClass?: string;
  className?: string;
}

const FooterLists: FC<Props> = ({ listOne, listTwo, listThree, title1, title2, className }) => {
  return (
    <StyledFooterLists className={className}>
      <ListCardPlain title={title1} list={listOne} shouldBeSecondList={false} />
      <ListCardPlain title={title2} list={listTwo} list2={listThree} shouldBeSecondList={true} />
    </StyledFooterLists>
  );
};

export default FooterLists;
