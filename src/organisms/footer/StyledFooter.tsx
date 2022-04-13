import styled from "styled-components";
import { ImageContainer } from "../../components/atoms/ImageContainer";
import { StyledResponsiveContainer } from "../../components/atoms/ResponsiveContainer";
import { theme } from "../../themes/MainTheme";
import { device } from "../../utils/devices/devices";

export const StyledFooter = styled.footer`
  margin-top: 8rem;
  height: auto;
  position: absolute;
  top: 100%;
  left: 0;
  padding-bottom: 6rem;
`;

export const StyledSection = styled(StyledResponsiveContainer)`
  padding: 6rem 1.5rem 6.5rem;
  @media ${device.tablet} {
    padding: 7.5rem 3rem;
  }
  @media ${device.laptop} {
    padding: 7.5rem 3rem 8.5rem;
  }
`;

export const StyledGridCards = styled(StyledResponsiveContainer)`
  display: grid;
  position: relative;
  grid-gap: 3.5rem;
  padding: 8rem 1.5rem 6rem;
  grid-template-areas:
    "a"
    "b"
    "c";
  .grid-area {
    &:first-child {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:last-child {
      grid-area: c;
    }
  }
  &:after {
    content: "";
    width: calc(100% - 3rem);
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    border-bottom: 1px solid ${theme.colors.grey1pxDividingLine};
  }
  @media ${device.tablet} {
    padding: 12rem 1.5rem 8rem;
    max-width: 768px;
    grid-template-areas:
      "a a a a a a"
      "b b b c c c";
    &:after {
      left: 3rem;
    }
  }
  @media ${device.laptop} {
    padding: 12rem 3rem 8rem;
    max-width: 1094px;
    grid-template-areas: "a a b b c c";
  }
`;
export const StyledGridLists = styled(StyledResponsiveContainer)`
  padding: 5.6rem 1.5rem 6.5rem;
  display: grid;
  grid-template-areas: "a" "b";
  grid-gap: 4.5rem;
  width: min-content(31rem);
  .grid-area-a {
    grid-area: a;
    width: min(31rem);
  }
  .grid-area-b {
    grid-area: b;
  }
  @media ${device.tablet} {
    padding: 7rem 1.5rem 6.5rem;
    grid-template-areas: "a a" "b b";
  }
  @media ${device.laptop} {
    padding: 7rem 3rem 3rem;
    grid-template-areas: "a b";
    grid-gap: 6rem;
  }
`;

export const StyledSideImage = styled(ImageContainer)`
  width: 314px;
  height: 289px;
  position: absolute;
  top: -188px;
  left: -80px;
  z-index: 10;
  img {
    transform: scale(1.2);
  }
  @media ${device.tablet} {
    width: 441px;
    height: 406;
    left: -144px;
    top: -188px;
  }
`;

export const StyledSpan = styled.span`
  display: block;
  font-size: 1.4rem;
  padding-left: 1.5rem;
  color: #b4b4b4;
  width: 100%;
  margin: 0 auto;
  @media ${device.tablet} {
    max-width: 768px;
  }
  @media ${device.laptop} {
    padding-left: 3rem;
    max-width: 1094px;
  }
`;
