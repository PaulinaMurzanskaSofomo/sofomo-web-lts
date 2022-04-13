import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledAddressCard = styled.div`
  width: 100%;
  height: 14.6rem;
  display: block;
`;

export const StyledTitle = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const StyledAddressBlock = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.5rem;
`;

export const StyledLabel = styled.div`
  width: 12.6rem;
  padding: 0.3rem 2rem;
  border-radius: 1.3rem;
  background: ${theme.colors.hoverBgr};
  color: ${theme.colors.backgroudBlue};
  border: 1px solid ${theme.colors.backgroudBlue};
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 1rem;
`;
