import React, { FC } from "react";
import { StyledListFooter } from "./StyledListFooter";

interface Props {
  classname?: string;
  title?: string;
  list: string[];
  list2: string[];
  doublelist?: boolean;
}

const ListFooter: FC<Props> = ({ classname, title, list, list2, doublelist }) => {
  return (
    <StyledListFooter className={classname}>
      <h3 className="title">{title}</h3>
      <div className="lists-wrapper">
        <ul className="about-list">
          {list.map((item, i) => (
            <li key={i}> {item}</li>
          ))}
        </ul>
        {doublelist && (
          <ul className="about-list">
            {list2.map((item, i) => (
              <li key={i}> {item}</li>
            ))}
          </ul>
        )}
      </div>
    </StyledListFooter>
  );
};

export default ListFooter;
