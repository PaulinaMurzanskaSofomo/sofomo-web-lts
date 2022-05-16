import { ElementType } from "react";
import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils/devices/devices";

export interface StyledProps {
  as?: ElementType;
  color?: string;
  width?: string;
  margin?: string;
  hoverColor?: string;
  hoverWeight?: string;
  transform?: string;
  highlightColor?: string;
  bold?: boolean;
}

export const StyledTypography = styled.p<StyledProps>`
  color: ${(props) => props.color};
  margin: ${({ margin }) => (margin ? margin : "0")};
  text-transform: ${({ transform }) => (transform ? transform : "")};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  width: ${({ width }) => (width ? width : "auto")};
  &.font-11-to-12 {
    font-size: 1.1rem;
    line-height: 1.8rem;
    letter-spacing: 0.3px;
    color: ${({ color }) => color || theme.colors.dark};
    @media ${device.tablet} {
      font-size: 1.2rem;
      line-height: 2rem;
      letter-spacing: 0.4px;
    }
  }
  &.font-12 {
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 0.4px;
    color: ${({ color }) => color || theme.colors.gray400};
    &.to-14 {
      color: ${({ color }) => color || theme.colors.white};
      @media ${device.tablet} {
        font-size: 1.4rem;
        line-height: 2.4rem;
        letter-spacing: 0;
      }
    }
  }
  &.font-13 {
    font-size: 1.3rem;
    line-height: 2rem;
    color: ${({ color }) => color || theme.colors.dark};
    &.to-15-to-17 {
      letter-spacing: 0.4px;
      color: ${({ color }) => color || theme.colors.gray300};
      @media ${device.tablet} {
        font-size: 1.5rem;
        line-height: 2.2rem;
        letter-spacing: 2.15px;
      }
      @media ${device.laptop} {
        font-size: 1.7rem;
        line-height: 3rem;
        letter-spacing: 2.15px;
        &.gold {
          font-weight: 500;
        }
      }
    }
    &.to-20 {
      @media ${device.tablet} {
        font-size: 2rem;
        line-height: 2.8rem;
        letter-spacing: 0;
      }
    }
  }

  &.font-14 {
    font-size: 1.4rem;
    line-height: 2.4rem;
    letter-spacing: 0.4px;
    color: ${({ color }) => color || theme.colors.gray400};
    &.to-12 {
      line-height: 2.2rem;
      color: ${({ color }) => color || theme.colors.gray600};
      @media ${device.tablet} {
        font-size: 1.2rem;
        line-height: 2rem;
        letter-spacing: 0.4px;
      }
    }
    &.to-15-to-17 {
      color: ${({ color }) => color || theme.colors.gray500};
      @media ${device.tablet} {
        font-size: 1.5rem;
        line-height: 2.2rem;
      }
      @media ${device.laptop} {
        font-size: 1.7rem;
        line-height: 3rem;
        letter-spacing: 0.4px;
      }
    }
    &.to-17 {
      color: ${({ color }) => color || theme.colors.gray500};
      @media ${device.tablet} {
        font-size: 1.7rem;
        line-height: 3rem;
        letter-spacing: 0.4px;
      }
      &.uppercase {
        letter-spacing: 1.75px;
        color: ${({ color }) => color || theme.colors.gray300};
        text-transform: uppercase;
        @media ${device.laptop} {
          font-size: 1.7rem;
          line-height: 3rem;
          letter-spacing: 2.15px;
        }
      }
    }
    &.to-20-to-26 {
      color: ${({ color }) => color || theme.colors.white};
      @media ${device.tablet} {
        font-size: 2rem;
        line-height: 2.8rem;
      }
      @media ${device.laptop} {
        font-size: 2.6rem;
        line-height: 4rem;
        letter-spacing: 0.35px;
      }
    }
  }
  &.font-15 {
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: ${({ color }) => color || theme.colors.gray500};
    &.to-18 {
      letter-spacing: 0.35px;
      color: ${({ color }) => color || theme.colors.gray500};
      @media ${device.tablet} {
        font-size: 1.8rem;
        line-height: 2.4rem;
        letter-spacing: 0;
      }
    }
  }
  &.font-16 {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ color }) => color || theme.colors.white};
    &.to-17 {
      color: ${({ color }) => color || theme.colors.gray500};
      @media ${device.tablet} {
        font-size: 1.7rem;
        line-height: 3rem;
        letter-spacing: 0.4px;
      }
    }
  }
  &.font-17-to-20 {
    font-size: 1.7rem;
    line-height: 3rem;
    letter-spacing: 0.4px;
    color: ${({ color }) => color || theme.colors.white};
    @media ${device.tablet} {
      font-size: 2rem;
      line-height: 2.8rem;
      letter-spacing: 0;
    }
  }
  &.font-20-to-24 {
    font-size: 2rem;
    line-height: 2.8rem;
    color: ${({ color }) => color || theme.colors.gray500};
    @media ${device.tablet} {
      font-size: 2.4rem;
      line-height: 3.8rem;
      letter-spacing: 0.3px;
    }
  }

  &.font-24-to-35 {
    font-size: 2.4rem;
    line-height: 3.8rem;
    letter-spacing: 0.3px;
    color: ${({ color }) => color || theme.colors.dark};
    @media ${device.tablet} {
      font-size: 3.5rem;
      line-height: 4.2rem;
      letter-spacing: 0.45px;
    }
    @media ${device.laptop} {
      letter-spacing: 0;
      line-height: 6.2rem;
      &.to-37 {
        font-size: 3.7rem;
      }
      &.to-44 {
        font-size: 4.4rem;
        span {
          &.highlighted {
            &:after {
              @media (min-width: 1094px) {
                height: 40.92px;
                bottom: 10px;
              }
            }
          }
        }
      }
      &.to-46 {
        font-size: 4.6rem;
      }
    }
  }
  &.font-24-to-35,
  &.to-20-to-26 {
    span {
      &.highlighted {
        position: relative;
        z-index: 2;
        display: inline-flex;
        &:last-child {
          &:after {
            margin-right: 5px;
          }
        }
        &:after {
          content: "";
          background-color: ${({ highlightColor }) => highlightColor || theme.colors.yellow};
          bottom: 8px;
          left: 0;
          right: 0;
          height: 22.32px;
          z-index: -1;
          position: absolute;
          display: block;
          @media (min-width: 768px) {
            bottom: 5px;
            height: 32.55px;
          }
          @media (min-width: 1094px) {
            height: 42.78px;
            bottom: 12px;
          }
        }
      }
    }
  }
  &.to-20-to-26 {
    span {
      &.highlighted {
        :after {
          height: 13.02px;
          bottom: 5px;
          @media ${device.tablet} {
            height: 18.6px;
            bottom: 5px;
          }
          @media ${device.laptop} {
            height: 24.18px;
            bottom: 7px;
          }
        }
      }
    }
  }
  &.font-26-to-37 {
    font-size: 2.6rem;
    line-height: 4rem;
    letter-spacing: 0.35px;
    color: ${({ color }) => color || theme.colors.dark};
    @media ${device.tablet} {
      font-size: 3.7rem;
      line-height: 4.8rem;
      letter-spacing: 0.35px;
    }
    @media ${device.laptop} {
      font-size: 4.6rem;
      line-height: 6.2rem;
      letter-spacing: 0;
    }
  }
  &.font-35-to-57 {
    font-size: 3.5rem;
    line-height: 4.2rem;
    letter-spacing: 0.45px;
    color: ${({ color }) => color || theme.colors.dark};
    @media ${device.tablet} {
      font-size: 5.7rem;
      line-height: 6.8rem;
      letter-spacing: 0;
    }
  }
  &:hover {
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "")};
    font-weight: ${({ hoverWeight }) => (hoverWeight ? hoverWeight : "")};
    transition: all 0.3s;
  }
  &.active {
    color: ${theme.colors.blue};
  }
`;
