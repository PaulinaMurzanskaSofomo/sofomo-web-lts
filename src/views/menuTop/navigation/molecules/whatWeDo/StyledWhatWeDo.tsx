import styled from "styled-components";
import { theme } from "../../../../../themes/MainTheme";

export const StyledWhatWeDoWrapper = styled.div`
  position: relative;
  flex-direction: column;
  width: 100vw;
  padding: 1.5rem 0;
  .subtitle {
    position: absolute;
    top: 0;
    left: 3rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${theme.colors.paragraph};
    font-weight: 400;
    line-height: 2rem;
    display: none;
  }
  .group-image {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .content-group-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      .content-group {
        display: block;
        padding: 1.5rem;
        height: 10.3rem;
        width: calc(100% - 3rem);
        margin-bottom: 0.5rem;
        margin-left: -1.5rem;
        h4 {
          margin-bottom: 0.5rem;
        }
        &:hover {
          background-color: ${theme.colors.hoverBgr};
          transition: 0.5s;
          h4 {
            color: ${theme.colors.activeHeaders};
          }
        }
        @media (min-width: 768px) {
          margin-right: 0.5rem;
        }
        @media (min-width: 1094px) {
          width: calc((1094px -3rem - 22rem) / 4);
        }
      }
    }
    .image-box-wrapper {
      width: 22rem;
      height: 24rem;
      display: none;
      @media (min-width: 1094px) {
        display: block;
      }
    }
  }
  .devs-what-we-do {
    display: none;
    width: calc(100% - 3rem - 22rem);
    height: auto;
    margin-top: -13.5rem;
    margin-left: -1.5rem;
    @media (min-width: 1094px) {
      display: block;
    }
    .developers {
      @media (min-width: 1094px) {
        max-height: 50vh;
        padding: 3rem 0;
        width: 100%;
        h3 {
          left: 1.5rem;
        }
        .roles-wrapper {
          width: 100%;
          .description {
            display: block;
            &.clicked-dev-open {
              display: none;
            }
          }
          ul {
            display: none;
            &.clicked-dev-open {
              display: block;
            }
          }
        }
      }
      .image-box {
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding-top: 4.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1094px) {
    flex-direction: column;
    width: 1094px;
    margin: 4rem auto 0;
    min-height: 50vh;
    padding: 3rem;
    .subtitle {
      display: block;
    }
  }
`;
