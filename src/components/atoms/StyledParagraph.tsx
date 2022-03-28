import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../themes/MainTheme";

interface Paragraph {
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  colorActive?: string;
  hover?: boolean;
  margin?: string;
  padding?: string;
}
interface StyledParagraph {
  font?: string;
  weight?: string;
  color?: string;
  line?: string;
  colorActive?: string;
  hover?: boolean;
  margin?: string;
  padding?: string;
}

const StyledParagraph = styled.p<StyledParagraph>`
  font-size: ${({ font }) => (font ? font : "1.4rem")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  color: ${({ color }) => (color ? color : theme.colors.paragraph)};
  line-height: ${({ line }) => (line ? line : "2.2rem")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  &.active {
    color: ${({ colorActive }) => (colorActive ? colorActive : theme.colors.activeHeaders)};
  }
  &:hover {
    color: ${({ hover }) => (hover ? theme.colors.activeHeaders : "")};
  }
`;
export const StyledParagraphP: FC<Paragraph> = ({
  text,
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
    <StyledParagraph
      font={fontSize}
      weight={fontWeight}
      color={color}
      line={lineHeight}
      colorActive={colorActive}
      hover={hover}
      margin={margin}
      padding={padding}
    >
      {text}
    </StyledParagraph>
  );
};
