import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

interface Props {
  fontSize?: string;
  width?: string;
}

export const StyledIcon = styled.a<Props>`
  width: ${({ width }) => width || "3.5rem"};
  height: ${({ width }) => width || "3.5rem"};
  font-size: ${({ fontSize }) => fontSize || "2rem"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray300};
  margin-right: 2rem;
  color: ${theme.colors.white};
  &.linked-in {
    color: ${theme.colors.gray300};
    svg {
      background-color: ${theme.colors.white};
      border-radius: 2px;
      padding: 3px;
    }
    &:hover {
      color: ${theme.colors.blue};
    }
  }
  &:hover {
    background-color: ${theme.colors.blue};
    transition: all 0.3s;
    color: white;
  }
`;
