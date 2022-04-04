import React, { FC } from "react";
import { offices } from "../../../assets/content/footer/Offices";
import { OwnerCard } from "../../../components/molecules/owner_card";
import { StyledFooterSection2 } from "./StyledFooterSection2";

interface Props {
  classname?: string;
}

const FooterSection2: FC<Props> = ({ classname }) => {
  return (
    <StyledFooterSection2 className={classname}>
      <div className="col-owner-content">
        {offices.map((office) => (
          <OwnerCard
            country={office.country}
            avatar={office.avatar}
            name={office.name}
            role={office.role}
            headquarter={office.headquarter}
            address1={office.address1}
            address2={office.address2}
            phone={office.phone}
            classname="owner"
          />
        ))}
      </div>
    </StyledFooterSection2>
  );
};

export default FooterSection2;
