import React, { FC } from "react";
import { developers } from "../../../../../assets/content/developers";
import DeveloperBlock from "./DeveloperBlock";
import { StyledDevWrapper } from "./StyledDevelopers";

interface Props {
  active?: boolean;
}

const Developers: FC<Props> = ({ active }) => {
  console.log("devs", developers);
  return (
    <StyledDevWrapper className={active ? "active" : ""}>
      {developers.map((dev) => (
        <DeveloperBlock
          title={dev.type}
          icon={dev.icon}
          description={dev.description}
          roles={dev.role}
          key={dev.id}
        />
      ))}
    </StyledDevWrapper>
  );
};

export default Developers;
