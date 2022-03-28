import React, { FC } from "react";
import styled from "styled-components";
import { theme } from "../../themes/MainTheme";
import { NavLink, To } from "react-router-dom";

interface ButtonProps {
  width?: string;
  height?: string;
  font?: string;
  backgroud?: string;
  lineHeigh?: string;
  label?: string;
  path?: To;
}

interface StyledButton {
  width?: string;
  height?: string;
  font?: string;
  backgroud?: string;
  lineHeigh?: string;
}
const StyledButtomWrapper = styled.button<StyledButton>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ font }) => (font ? font : "1.8rem")};
  color: ${({ color }) => (color ? color : "#ffffff")};
  background-color: ${({ backgroud }) => (backgroud ? backgroud : theme.colors.actionPrimaryGreen)};
  line-height: ${({ lineHeigh }) => (lineHeigh ? lineHeigh : "2.6rem")};
  border: none;
  padding: 1.3rem;
  border-radius: 2px;
  outline: none;
  a {
    color: inherit;
  }
`;

const StyledButton: FC<ButtonProps> = ({
  label,
  height,
  font,
  backgroud,
  lineHeigh,
  width,
  path,
}) => {
  return (
    <StyledButtomWrapper
      width={width}
      height={height}
      font={font}
      backgroud={backgroud}
      lineHeigh={lineHeigh}
    >
      <NavLink to={path ? path : "/"}>{label}</NavLink>
    </StyledButtomWrapper>
  );
};

export default StyledButton;
