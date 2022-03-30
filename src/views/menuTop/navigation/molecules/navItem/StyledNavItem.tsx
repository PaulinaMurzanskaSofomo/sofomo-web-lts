import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledItem = styled.li`
  height: auto;
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${theme.colors.textDarkNavy};
  border-bottom: 1px solid ${theme.colors.shadow};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  a {
    width: 100%;
    .content-switch {
      display: none;
    }
    &.active {
      border-bottom: none;
      .link-name {
        h4 {
          color: ${theme.colors.activeHeaders};
        }
        .chevrons {
          color: ${theme.colors.activeHeaders};
          .down {
            display: none;
          }
          .up {
            display: flex;
          }
        }
      }
      .content-switch {
        display: block;
        .what-we-do {
          display: flex;
        }
        .developers {
          display: flex;
        }
        @media (min-width: 1094px) {
          display: none;
        }
      }
    }
  }
  @media (min-width: 768px) {
    width: auto;
    font-size: 1.5rem;
  }
  @media (min-width: 1094px) {
    padding-left: 3.4rem;
    border: none;
  }
`;

export const StyledHeaderWrapper = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  .chevrons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5rem;
    font-size: 1.8rem;
    color: ${theme.colors.paragraph};
    .down {
      display: flex;
    }
    .up {
      display: none;
    }
  }
  @media (min-width: 1094px) {
    padding: 1.5rem 0;
    h4 {
      font-size: 1.5rem;
    }
    .chevrons {
      font-size: 1.5rem;
    }
  }
`;
