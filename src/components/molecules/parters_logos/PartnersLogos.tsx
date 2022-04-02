import React, { FC } from "react";
import { partnersLogosList } from "../../../assets/logos/partners/logosList";
import { StyledPartnersLogos } from "./index";

interface Props {
  classname?: string;
}

const PartnersLogos: FC<Props> = ({ classname }) => {
  return (
    <StyledPartnersLogos className={classname}>
      {partnersLogosList.map((item) => (
        <div className="icon">
          <img src={item} alt="" />
        </div>
      ))}
    </StyledPartnersLogos>
  );
};

export default PartnersLogos;
