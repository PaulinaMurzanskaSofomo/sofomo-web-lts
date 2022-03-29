import React, { FC, useState } from "react";
import { StyledRoles, StyledDevDisplay, StyledDescription } from "./StyledDevelopers";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";
import DevRoleList from "./DevRoleList";

interface DevProps {
  title?: string;
  icon?: any;
  description?: string;
  roles: {
    rolename?: string;
    url?: string;
  }[];
}

const DeveloperBlock: FC<DevProps> = ({ title, icon, description, roles }) => {
  const [devClicked, setDevClicked] = useState(false);

  const handleClick = () => {
    setDevClicked(!devClicked);
  };

  return (
    <StyledRoles onClick={handleClick}>
      <img src={icon} alt="icon" />
      <StyledDevDisplay>
        <StyledHeaderH4 label={title} fontSize="1.6rem" />
        <StyledDescription className={devClicked ? "clicked-dev-open" : ""}>
          <StyledParagraphP text={description} />
        </StyledDescription>
        <DevRoleList devClicked={devClicked} roles={roles} />
      </StyledDevDisplay>
    </StyledRoles>
  );
};

export default DeveloperBlock;
