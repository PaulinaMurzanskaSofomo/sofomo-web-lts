import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../themes/MainTheme";

interface Header {
  label?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  colorActive?: string;
  hover?: boolean;
  margin?: string;
  padding?: string;
}
interface StyledHeader {
  font?: string;
  weight?: string;
  color?: string;
  line?: string;
  colorActive?: string;
  hover?: boolean;
  margin?: string;
  padding?: string;
}

const StyledHeader = styled.h4<StyledHeader>`
  font-size: ${({ font }) => (font ? font : "1.6rem")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  color: ${({ color }) => (color ? color : theme.colors.textDarkNavy)};
  line-height: ${({ line }) => (line ? line : "2.4rem")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  text-transform: capitalize;
  &.active {
    color: ${({ colorActive }) => (colorActive ? colorActive : theme.colors.activeHeaders)};
  }
  &:hover {
    color: ${({ hover }) => (hover ? theme.colors.activeHeaders : "")};
  }
`;
export const StyledHeaderH4: FC<Header> = ({
  label,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  colorActive,
  hover,
  margin,
  padding,
}) => {
  return (
    <StyledHeader
      font={fontSize}
      weight={fontWeight}
      color={color}
      line={lineHeight}
      colorActive={colorActive}
      hover={hover}
      margin={margin}
      padding={padding}
    >
      {label}
    </StyledHeader>
  );
};
