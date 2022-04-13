import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

interface Props {
  fill?: string;
  bgr?: string;
  fillHover?: string;
  fontSize?: string;
  width?: string;
  height?: string;
}

export const StyledSocialIcon = styled.a<Props>`
  width: ${({ width }) => (width ? width : "3.5rem")};
  height: ${({ height }) => (height ? height : "3.5rem")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "2.2rem")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.iconsDisactive};
  margin-right: 2rem;
  svg {
    fill: ${({ fill }) => (fill ? fill : "none")};
    background-color: ${({ bgr }) => (bgr ? bgr : "none")};
    border-radius: 3px;
    padding: 2px;
    color: ${theme.colors.iconsDisactive};
  }
  &:hover {
    background-color: ${theme.colors.backgroudBlue};
    transition: 0.3s;
    svg {
      fill: ${({ fillHover }) => (fillHover ? theme.colors.backgroudBlue : "")};
    }
  }
`;
