import React, { FC } from "react";
import { StyledDevDisplay, StyledDescription } from "./StyledDevelopersDisplay";
import { StyledHeaderH4 } from "../../../../../components/atoms/StyledHeader";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";
import DevRoleList from "./DevRoleList";

interface Props {
  title?: string;
  devClicked?: boolean;
  description?: string;
  roles: {
    rolename?: string;
    url?: string;
  }[];
  conditionForFullScreenDisplay?: boolean;
}
const DevelopersDisplay: FC<Props> = ({ title, devClicked, description, roles }) => {
  return (
    <StyledDevDisplay>
      <StyledHeaderH4 label={title} fontSize="1.6rem" />
      <StyledDescription className={devClicked ? "clicked-dev-open" : "description"}>
        <StyledParagraphP fontSize="1.2rem" text={description} />
      </StyledDescription>
      <DevRoleList devClicked={devClicked} roles={roles} />
    </StyledDevDisplay>
  );
};

export default DevelopersDisplay;
