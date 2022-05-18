import styled, { css } from "styled-components";
import { ElementType } from "react";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils/devices/devices";

export const variant: any = {
  body_text_1: {
    color: theme.colors.dark,
    mobile: {
      size: "1.1rem",
      line: "1.8rem",
      spacing: "0.3px",
    },
    tablet: {
      size: "1.2rem",
      line: "2rem",
      spacing: "0.4px",
    },
  },
  body_text_2: {
    color: theme.colors.white,
    mobile: {
      size: "1.2rem",
      line: "2rem",
      spacing: "0.4px",
    },
    tablet: {
      size: "1.4rem",
      line: "2.4rem",
      spacing: "0",
    },
  },
  body_text_3: {
    color: theme.colors.gray300,
    mobile: {
      size: "1.3rem",
      line: "2rem",
      spacing: "0.4px",
    },
    tablet: {
      size: "1.5rem",
      line: "2.2rem",
      spacing: "2.15px",
    },
    laptop: {
      size: "1.7rem",
      line: "3rem",
      spacing: "2.15px",
    },
  },
  body_text_4: {
    color: theme.colors.gray400,
    mobile: {
      size: "1.4rem",
      line: "2.4rem",
      spacing: "0.4px",
    },
  },
  body_text_5: {
    color: theme.colors.gray600,
    mobile: {
      size: "1.4rem",
      line: "2.2rem",
      spacing: "0.4px",
    },
    tablet: {
      size: "1.2rem",
      line: "2rem",
      spacing: "0.4px",
    },
  },
  body_text_6: {
    color: theme.colors.gray500,
    mobile: {
      size: "1.5rem",
      line: "2.2rem",
      spacing: "0.35",
    },
    tablet: {
      size: "1.8rem",
      line: "2.4rem",
      spacing: "0",
    },
  },
  body_text_7: {
    color: theme.colors.white,
    mobile: {
      size: "1.6rem",
      line: "2.4rem",
      spacing: "0",
    },
  },
  body_text_8: {
    margin: "1.5rem 0 3rem 0",
    color: theme.colors.gray500,
    mobile: {
      size: "1.6rem",
      line: "2.4rem",
      spacing: "0",
    },
    tablet: {
      size: "1.7rem",
      line: "3rem",
      spacing: "0.4px",
    },
  },
  body_text_9: {
    color: theme.colors.gray500,
    mobile: {
      size: "2rem",
      line: "2.8rem",
      spacing: "0",
    },
    tablet: {
      size: "2.4rem",
      line: "3.8rem",
      spacing: "0.3",
    },
  },
  text_uppercase_1: {
    color: theme.colors.gray400,
    transform: "uppercase",
    mobile: {
      size: "1.2rem",
      line: "2rem",
      spacing: "0.4px",
    },
  },
  text_uppercase_2: {
    margin: "0 0 1.5rem 0",
    transform: "uppercase",
    weight: "700",
    color: theme.colors.gray300,
    mobile: {
      size: "1.4rem",
      line: "2.4rem",
      spacing: "1.75px",
    },
    tablet: {
      size: "1.7rem",
      line: "3rem",
      spacing: "2.15px",
    },
  },
  heading_8: {
    margin: "1.5rem 0 3rem 0",
    weight: "700",
    color: theme.colors.dark,
    mobile: {
      size: "1.3rem",
      line: "2rem",
      spacing: "0.4px",
    },
    tablet: {
      size: "2rem",
      line: "2.8rem",
      spacing: "0",
    },
  },
  heading_7: {
    color: theme.colors.white,
    weight: "700",
    mobile: {
      size: "1.4rem",
      line: "2.4rem",
      spacing: "0.4px",
    },
    tablet: {
      size: "2rem",
      line: "2.8rem",
      spacing: "0.4px",
    },
    laptop: {
      size: "2.6rem",
      line: "4rem",
      spacing: "0.35px",
    },
  },
  heading_6: {
    color: theme.colors.white,
    weight: "700",
    mobile: {
      size: "1.7rem",
      line: "3rem",
      spacing: "0.4px",
    },
    tablet: {
      size: "2rem",
      line: "2.8rem",
      spacing: "0",
    },
  },
  heading_5: {
    color: theme.colors.dark,
    weight: "700",
    mobile: {
      size: "2.4rem",
      line: "3.8rem",
      spacing: "0.3px",
    },
    tablet: {
      size: "3.5rem",
      line: "4.2rem",
      spacing: "0.45px",
    },
    laptop: {
      size: "3.7rem",
      line: "6.2rem",
      spacing: "0",
    },
  },
  heading_4: {
    color: theme.colors.dark,
    weight: "700",
    mobile: {
      size: "2.4rem",
      line: "3.8rem",
      spacing: "0.3px",
    },
    tablet: {
      size: "3.5rem",
      line: "4.2rem",
      spacing: "0.45px",
    },
    laptop: {
      size: "4.4rem",
      line: "6.2rem",
      spacing: "0",
    },
  },
  heading_3: {
    color: theme.colors.dark,
    weight: "700",
    mobile: {
      size: "2.4rem",
      line: "3.8rem",
      spacing: "0.3px",
    },
    tablet: {
      size: "3.5rem",
      line: "4.2rem",
      spacing: "0.45px",
    },
    laptop: {
      size: "4.6rem",
      line: "6.2rem",
      spacing: "0",
    },
  },
  heading_2: {
    color: theme.colors.dark,
    weight: "700",
    margin: "0",
    mobile: {
      size: "2.6rem",
      line: "4rem",
      spacing: "0.35px",
    },
    tablet: {
      size: "3.7rem",
      line: "4.8rem",
      spacing: "0.35px",
    },
    laptop: {
      size: "4.6rem",
      line: "6.2rem",
      spacing: "0",
    },
  },
  heading_1: {
    color: theme.colors.dark,
    weight: "700",
    mobile: {
      size: "3.5rem",
      line: "4.2rem",
      spacing: "0.45px",
    },
    laptop: {
      size: "5.7rem",
      line: "6.8rem",
      spacing: "0",
    },
  },
};

export interface StyledProps {
  as?: ElementType;
  customColor?: string;
  width?: string;
  hoverWeight?: string;
  highlightColor?: string;
  bold?: boolean;
  name: string;
}

export const StyledTypography = styled.p<StyledProps>(
  ({ name, customColor, bold, highlightColor, width }) => {
    const { mobile, tablet, laptop, color, weight, margin, transform } = variant[name];
    return [
      css`
        text-transform: ${transform};
        color: ${customColor || color};
        font-weight: ${(bold && "700") || weight};
        font-size: ${mobile.size};
        margin: ${margin};
        line-height: ${mobile.line};
        letter-spacing: ${mobile.spacing};
        width: ${width};

        ${tablet &&
        css`
          @media ${device.tablet} {
            font-size: ${tablet.size};
            line-height: ${tablet.line};
            letter-spacing: ${tablet.spacing};
          }
        `}
        ${laptop &&
        css`
          @media ${device.laptop} {
            font-size: ${laptop.size};
            line-height: ${laptop.line};
            letter-spacing: ${laptop.spacing};
          }
        `}
      ${highlightColor &&
        css`
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
                background-color: ${highlightColor};
                bottom: calc((${mobile.line} - ${mobile.size}) * 0.5 + 2px);
                left: 0;
                right: 0;
                height: calc(${mobile.size} * 0.93);
                z-index: -1;
                position: absolute;
                display: block;
                @media (min-width: 768px) {
                  bottom: calc((${tablet.line} - ${tablet.size}) * 0.5 + 3px);
                  height: calc(${tablet.size} * 0.93);
                }
                @media (min-width: 1094px) {
                  bottom: calc((${laptop.line} - ${laptop.size}) * 0.5 + 4px);
                  height: calc(${laptop.size} * 0.93);
                }
              }
            }
          }
        `}
      `,
    ];
  }
);
