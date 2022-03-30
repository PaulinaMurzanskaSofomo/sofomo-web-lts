import React, { FC } from "react";
import { developers } from "../../../../../assets/content/developers";
import DeveloperBlock from "./DeveloperBlock";
import ImageBox from "../../atoms/ImageBox";
import { StyledDevelopersWrapper } from "./StyledDevelopers";

const Developers: FC = () => {
  return (
    <StyledDevelopersWrapper className="developers">
      <h3>hire developers</h3>
      <div className="roles-image-wrapper">
        <div className="roles-wrapper">
          {developers.map((dev) => (
            <DeveloperBlock
              title={dev.type}
              icon={dev.icon}
              description={dev.description}
              roles={dev.role}
              key={dev.id}
            />
          ))}
        </div>
        <div className="image-box">
          <ImageBox />
        </div>
      </div>
    </StyledDevelopersWrapper>
  );
};

export default Developers;
