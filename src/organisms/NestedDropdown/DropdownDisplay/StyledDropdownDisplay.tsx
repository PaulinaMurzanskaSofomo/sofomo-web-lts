import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledDropdownDisplay = styled.div`
  margin-top: 3.5rem;
`;

export const StyledListOverlay = styled.div`
  width: 101%;
  height: 101%;
  background-color: ${theme.colors.purple};
  opacity: 0.85;
  top: -1px;
  left: -1px;
  z-index: 0;
  position: absolute;
  display: none;
  &.active {
    display: block;
  }
`;
