import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

interface Props {
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  fontWeight?: string;
  transform?: string;
}
export const StyledParagraph = styled.p<Props>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.4rem")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "2.4rem")};
  color: ${({ color }) => (color ? color : theme.colors.paragraph)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  text-transform: ${({ transform }) => (transform ? transform : "none")}; ;
`;
