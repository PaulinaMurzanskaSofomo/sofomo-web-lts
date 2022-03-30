import React, { FC } from "react";
import { StyledRoleList } from "./StyledDevRoleListAndItem";
import DevRoleItem from "./DevRoleItem";

interface Props {
  devClicked?: boolean;
  roles: {
    rolename?: string;
    url?: string;
  }[];
}

const DevRoleList: FC<Props> = ({ devClicked, roles }) => {
  return (
    <StyledRoleList className={devClicked ? "clicked-dev-open" : ""}>
      {roles.map((role, i) => (
        <DevRoleItem url={role.url} rolename={role.rolename} key={i} />
      ))}
    </StyledRoleList>
  );
};

export default DevRoleList;
