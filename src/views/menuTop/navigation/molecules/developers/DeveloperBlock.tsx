import React, { FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  StyledRoles,
  StyledDevDisplay,
  StyledDescription,
  StyledRoleList,
  StyledRoleItem,
} from "./StyledDevelopers";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";

interface DevProps {
  title?: string;
  icon?: any;
  description?: string;
  roles: {
    rolename?: string;
    url: string;
  }[];
}

const DeveloperBlock: FC<DevProps> = ({ title, icon, description, roles }) => {
  return (
    <StyledRoles>
      <img src={icon} alt="icon" />
      <StyledDevDisplay>
        <StyledHeaderH4 label={title} fontSize="1.6rem" />
        <StyledDescription>
          <StyledParagraphP text={description} />
        </StyledDescription>
        <StyledRoleList>
          {roles.map((role, i) => (
            <StyledRoleItem key={i}>
              <a href={role.url ? role.url : "/"} target="_blank">
                <StyledParagraphP text={role.rolename} fontSize="1.4rem" />
                <BsArrowRight style={{ marginLeft: "10px" }} />
              </a>
            </StyledRoleItem>
          ))}
        </StyledRoleList>
      </StyledDevDisplay>
    </StyledRoles>
  );
};

export default DeveloperBlock;
