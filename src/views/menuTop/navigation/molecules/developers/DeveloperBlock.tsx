import React, { FC, useState } from "react";
import { StyledRoles } from "./StyledDevelopersBlock";
import DevelopersDisplay from "./DevelopersDisplay";

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
      <DevelopersDisplay
        title={title}
        devClicked={devClicked}
        description={description}
        roles={roles}
      />
    </StyledRoles>
  );
};

export default DeveloperBlock;
