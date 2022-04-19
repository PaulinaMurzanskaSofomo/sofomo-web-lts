import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils/devices/devices";

interface Props {
  as?: any;
  color?: string;
  width?: string;
  margin?: string;
  weight?: string;
  fontBase?: [fontSize?: number, lineHeight?: number, letterSpacing?: number];
  fontMd?: [fontSize?: number, lineHeight?: number, letterSpacing?: number];
  fontLg?: [fontSize?: number, lineHeight?: number, letterSpacing?: number];
  hoverColor?: string;
  hoverWeight?: string;
  transform?: string;
}

export const StyledTypography = styled.p<Props>`
  color: ${(props) => props.color};
  margin: ${({ margin }) => (margin ? margin : "")};
  text-transform: ${({ transform }) => (transform ? transform : "")};
  font-weight: ${({ weight }) => (weight ? weight : "40rem")};
  font-size: ${({ fontBase }) => (fontBase ? fontBase[0] : 1.4)}rem;
  line-height: ${({ fontBase }) => (fontBase ? fontBase[1] : 2.4)}rem;
  letter-spacing: ${({ fontBase }) => (fontBase ? fontBase[2] : 0)}px;
  width: ${({ width }) => (width ? width : "auto")};
  @media ${device.tablet} {
    font-size: ${({ fontMd }) => (fontMd ? fontMd[0] : null)}rem;
    line-height: ${({ fontMd }) => (fontMd ? fontMd[1] : null)}rem;
    letter-spacing: ${({ fontMd }) => (fontMd ? fontMd[2] : null)}px;
  }
  @media ${device.laptop} {
    font-size: ${({ fontLg }) => (fontLg ? fontLg[0] : null)}rem;
    line-height: ${({ fontLg }) => (fontLg ? fontLg[1] : null)}rem;
    letter-spacing: ${({ fontLg }) => (fontLg ? fontLg[2] : null)}px;
  }
  &.regular-pale {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${theme.colors.textPale};
  }
  &.medium {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${theme.colors.textDarkGreyIsh};
  }
  &.text-shrink {
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: ${theme.colors.paragraph};
    @media ${device.tablet} {
      font-size: 1.2rem;
      line-height: 2rem;
      letter-spacing: 0.4px;
    }
  }
  &.small-pale {
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 0.4px;
    color: ${theme.colors.textPale};
  }
  &.title {
    font-size: 2.6rem;
    line-height: 4rem;
    letter-spacing: 0.35px;
    color: ${theme.colors.textDarkGreyIsh};
    @media ${device.tablet} {
      font-size: 3.7rem;
      line-height: 4.8rem;
      letter-spacing: 0.5px;
    }
    @media ${device.laptop} {
      font-size: 4.6rem;
      line-height: 6.2rem;
      letter-spacing: 0;
    }
  }
  &:hover {
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "")};
    font-weight: ${({ hoverWeight }) => (hoverWeight ? hoverWeight : "")};
    transition: all 0.3s;
  }
  &.active {
    color: ${theme.colors.activeHeaders};
  }
`;
