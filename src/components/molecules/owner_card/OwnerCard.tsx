import React, { FC } from "react";
import { StyledOwnerCard } from "./index";
import { StyledHeader } from "../../atoms/headers";
import { StyledHeadquarter } from "../../atoms/headquarter";
import { StyledAvatar } from "../../atoms/avatars";

interface Props {
  country?: string;
  headquarter?: boolean;
  role?: string;
  address1?: string;
  address2?: string;
  phone?: string;
  avatar?: string;
  name?: string;
  classname?: string;
}

const OwnerCard: FC<Props> = ({
  country,
  headquarter,
  name,
  role,
  address1,
  address2,
  phone,
  avatar,
  classname,
}) => {
  return (
    <StyledOwnerCard className={classname}>
      <div className="header">
        <StyledHeader fontSize="2.2rem" lineHeight="3rem" fontWeight="700">
          {country}
        </StyledHeader>
        {headquarter && <StyledHeadquarter>Headquarters</StyledHeadquarter>}
      </div>
      <div className="image-address-box">
        <StyledAvatar src={avatar} alt="avatar" />
        <div className="address-box">
          <p>
            {name}, {role}
          </p>
          <p>{address1} </p>
          <p>{address2}</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
    </StyledOwnerCard>
  );
};

export default OwnerCard;
