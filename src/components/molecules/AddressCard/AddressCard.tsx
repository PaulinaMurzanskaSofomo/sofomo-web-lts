import React, { FC } from "react";
import { classes } from "../../../utils/classes/classes";
import { theme } from "../../../themes/MainTheme";
import { ImageContainer } from "../../atoms/ImageContainer";
import Typography from "../../atoms/Typography/Typography";
import {
  StyledAddressCard,
  StyledAddressBlock,
  StyledContent,
  StyledLabel,
  StyledTitle,
} from "./StyledAddressCard";

interface Props {
  country?: string;
  headquarter?: boolean;
  data: string[];
  avatar: string;
  className?: string;
}

const AddressCard: FC<Props> = ({ country, headquarter, data, avatar, className }) => {
  return (
    <StyledAddressCard className={className}>
      <StyledTitle>
        <Typography as="h1" className={classes.h.cardH6}>
          {country}
        </Typography>
        {headquarter && <StyledLabel>Headquarters</StyledLabel>}
      </StyledTitle>
      <StyledContent>
        <ImageContainer width="5rem" height="5rem">
          <img src={avatar} alt="avatar" />
        </ImageContainer>
        <StyledAddressBlock>
          {data.map((item, i) => (
            <Typography key={i} className={classes.p.mediumPaleP}>
              {item}
            </Typography>
          ))}
        </StyledAddressBlock>
      </StyledContent>
    </StyledAddressCard>
  );
};

export default AddressCard;
