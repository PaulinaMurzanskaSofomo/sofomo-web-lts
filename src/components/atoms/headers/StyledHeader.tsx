import styled, { css } from "styled-components";
import { theme } from "../../../themes/MainTheme";

interface Props {
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  fontWeight?: string;
  transform?: string;
}
export const StyledHeader = styled.h3<Props>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "2.4rem")};
  color: ${({ color }) => (color ? color : theme.colors.textDarkNavy)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  text-transform: ${({ transform }) => (transform ? transform : "none")}; ;
`;
