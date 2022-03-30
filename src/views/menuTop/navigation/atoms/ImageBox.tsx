import React, { FC } from "react";
import styled from "styled-components";
import devsImage from "../../../../assets/images/nav/Muzli-770x618.svg";
import { StyledParagraphP } from "../../../../components/atoms/StyledParagraph";

export const StyledImageBoxWrapper = styled.div`
  display: none;
  width: 22rem;
  height: 24rem;
  .image {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 18rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 1094px) {
    display: block;
  }
`;

const ImageBox: FC = () => {
  return (
    <StyledImageBoxWrapper className="image-box">
      <div className="image" style={{ backgroundImage: `url(${devsImage})` }} />
      <StyledParagraphP
        fontSize="1.2rem"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </StyledImageBoxWrapper>
  );
};

export default ImageBox;
