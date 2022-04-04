import React, { FC } from "react";
import { ListFooter } from "../list-footer";
import { StyledFooterLists } from "./StyledFooterLists";

interface Props {
  listOne: string[];
  listTwo: string[];
  listThree: string[];
  title1: string;
  title2: string;
  doublelist: boolean;
  wrapperClass?: string;
  doubleListClass?: string;
}

const FooterLists: FC<Props> = ({
  listOne,
  listTwo,
  listThree,
  title1,
  title2,
  doublelist,
  wrapperClass,
  doubleListClass,
}) => {
  return (
    <StyledFooterLists className={wrapperClass}>
      <ListFooter list={listOne} list2={listTwo} title={title1} />
      <ListFooter
        title={title2}
        list={listTwo}
        list2={listThree}
        doublelist={doublelist}
        classname={doubleListClass}
      />
    </StyledFooterLists>
  );
};

export default FooterLists;
