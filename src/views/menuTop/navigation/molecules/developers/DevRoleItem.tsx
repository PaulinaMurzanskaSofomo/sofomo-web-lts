import React, { FC } from "react";
import { StyledRoleItem } from "./StyledDevRoleListAndItem";
import { BsArrowRight } from "react-icons/bs";
import { StyledParagraphP } from "../../../../../components/atoms/StyledParagraph";

interface Props {
  url?: any;
  rolename?: string;
}

const DevRoleItem: FC<Props> = ({ url, rolename }) => {
  const handleNavigate = (url: string, target: string) => {
    window.open(url, target);
  };

  return (
    <StyledRoleItem onClick={() => handleNavigate(url, "_blank")}>
      <StyledParagraphP text={rolename} fontSize="1.4rem" />
      <BsArrowRight style={{ marginLeft: "10px" }} />
    </StyledRoleItem>
  );
};

export default DevRoleItem;
