import styled from "styled-components";
import { device } from "../../../utils";
import { StyledResponsiveContainer } from "../../atoms";

export const StyledGrid = styled(StyledResponsiveContainer)`
  width: 100%;
  display: grid;
  &.grid-4-items {
    margin-left: -1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    @media ${device.tablet} {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &.grid-5-items {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    @media ${device.tablet} {
      grid-template-columns: repeat(5, 1fr);
    }
    .grid-item {
      &:first-child {
        display: none;
        @media ${device.tablet} {
          display: block;
        }
      }
    }
  }

  &.grid-6-items {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    .grid-item {
      height: 100%;
    }
    @media ${device.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.laptop} {
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 0;
    }
  }
`;
