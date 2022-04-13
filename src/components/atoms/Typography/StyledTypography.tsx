import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils/devices/devices";

interface Props {
  width?: string;
  margin?: string;
  as?: any;
  align?: string;
}

export const StyledTypography = styled.p<Props>`
  width: ${({ width }) => (width ? width : "auto")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  text-align: ${({ align }) => (align ? align : "left")};
  &.medium {
    font-size: 1.4rem;
    line-height: 2.4rem;
    &.pale {
      color: ${theme.colors.textPale};
      &.hover {
        &:hover {
          color: ${theme.colors.backgroudBlue};
          font-weight: bolder;
        }
      }
    }
    &.grow {
      color: ${theme.colors.textRegular};
      @media ${device.tablet} {
        letter-spacing: 0.4px;
        font-size: 1.7rem;
        line-height: 3rem;
      }
    }
    &.white {
      letter-spacing: 0.4px;
      color: ${theme.colors.white};
    }
    &.placeholder {
      @media ${device.tablet} {
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    }
  }
  &.regular {
    font-size: 1.6rem;
    line-height: 2.4rem;
    &.dark {
      color: ${theme.colors.textRegular};
    }
    &.white {
      color: ${theme.colors.white};
    }
    @media ${device.tablet} {
      font-size: 1.7rem;
      line-height: 3rem;
      letter-spacing: 0.4px;
    }
    &.hover {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${theme.colors.white};
      &:hover {
        color: ${theme.colors.backgroudBlue};
      }
    }
  }
  &.capitalised {
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 0.4px;
    color: ${theme.colors.textPale};
    text-transform: capitalize;
  }
  &.large {
    font-size: 2em;
    line-height: 2.8rem;
    color: ${theme.colors.textRegular};
    @media ${device.tablet} {
      font-size: 2.4rem;
      line-height: 3.8rem;
      letter-spacing: 0.3px;
    }
  }
  &.subtitle {
    font-size: 1.5rem;
    line-height: 2.3rem;
    line-height: 2.8rem;
    color: ${theme.colors.textRegular};

    @media ${device.tablet} {
      font-size: 1.8rem;
      line-height: 2.4rem;
      letter-spacing: 0;
    }
  }
  &.top-title {
    font-size: 2.6rem;
    line-height: 4rem;
    font-weight: 700;
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
  &.upper {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    &.blue {
      color: ${theme.colors.backgroudBlue};
    }
    &.white {
      color: ${theme.colors.white};
    }
    &.gray {
      color: ${theme.colors.grayLight};
    }
    @media ${device.laptop} {
      font-size: 1.7rem;
      line-height: 3rem;
      letter-spacing: 2.15px;
    }
  }
  &.section {
    font-size: 2.4rem;
    line-height: 3.8rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    &.white {
      color: ${theme.colors.white};
    }
    &.dark {
      color: ${theme.colors.textDarkGreyIsh};
    }
    @media ${device.tablet} {
      font-size: 3.5rem;
      line-height: 4.2rem;
      letter-spacing: 0.45px;
    }
    @media ${device.laptop} {
      font-size: 4.6rem;
      line-height: 6.2rem;
      letter-spacing: 0;
    }
  }
  &.lists {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    &.dark {
      color: ${theme.colors.textDarkGreyIsh};
    }
    &.white {
      color: ${theme.colors.white};
      @media ${device.tablet} {
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
      @media ${device.laptop} {
        font-size: 2.2rem;
        line-height: 3rem;
      }
    }
  }
  &.card {
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 700;
    color: ${theme.colors.textDarkGreyIsh};
  }
  &.quorte {
    font-size: 2.4rem;
    line-height: 3.8rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    &.large {
      color: ${theme.colors.white};
      @media ${device.laptop} {
        font-size: 4.4rem;
        line-height: 6.2rem;
        letter-spacing: 0;
      }
    }
    &.medium {
      color: ${theme.colors.textDarkGreyIsh};
      @media ${device.laptop} {
        font-size: 3.7rem;
        line-height: 4.8rem;
        letter-spacing: 0.5px;
      }
    }
    @media ${device.laptop} {
      font-size: 3.5rem;
      line-height: 4.2rem;
      letter-spacing: 0.45px;
    }
  }
  &.with-hover {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 700;
    color: ${theme.colors.white};
    @media ${device.tablet} {
      font-size: 2rem;
      line-height: 3rem;
    }
    @media ${device.laptop} {
      font-size: 2.6rem;
      line-height: 4rem;
      letter-spacing: 0.35px;
    }
    &:hover {
      color: ${theme.colors.backgroudBlue};
    }
  }
  &.small {
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 700;
    color: ${theme.colors.textDarkGreyIsh};
    @media ${device.tablet} {
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }
  &.normal {
    font-size: 1.7rem;
    line-height: 3rem;
    font-weight: 700;
    letter-spacing: 0.4px;
    color: ${theme.colors.white};
    text-align: center;
    padding: 0 1.5rem;
    @media ${device.tablet} {
      font-size: 2rem;
      line-height: 2.8rem;
      letter-spacing: 0;
    }
  }
`;
