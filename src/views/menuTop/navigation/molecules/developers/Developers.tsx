import React, { FC } from "react";
import { developers } from "../../../../../assets/content/developers";
import DeveloperBlock from "./DeveloperBlock";
import { StyledContentWrapper } from "../../templates/StyledContentSwitch";

const Developers: FC = () => {
  return (
    <StyledContentWrapper className="developers">
      <h3>hire developers</h3>
      {developers.map((dev) => (
        <DeveloperBlock
          title={dev.type}
          icon={dev.icon}
          description={dev.description}
          roles={dev.role}
          key={dev.id}
        />
      ))}
    </StyledContentWrapper>
  );
};

export default Developers;
