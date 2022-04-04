import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";

export const StyledFooterWrapper = styled.footer`
  margin-top: 8rem;
  width: 100vw;
  min-width: 375px;
  height: auto;
  border: 3px solid red;
  background-color: #f7f2f2;
  position: absolute;
  top: 100%;
  left: 0;
  padding-bottom: 6rem;
  .grid-footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(267px, auto);
    grid-gap: 5px;

    .grid {
      border: 1px solid green;
      width: 100%;
      &.grid-col-1-blue {
        margin: 0 auto;
        width: 100%;
        background-color: ${theme.colors.backgroudBlue};
        .col-blue-content {
          margin: 0 auto;
          border: 2px solid navy;
          min-width: 375px;
          max-width: 1094px;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          padding: 6rem 3rem 6.5rem;
          grid-gap: 5rem;
          @media (min-width: 768px) {
            padding: 7.5rem 3rem;
            max-width: 768px;
          }
          @media (min-width: 1094px) {
            grid-gap: 4rem;
            max-width: 1094px;
            padding: 7.5rem 3rem 8.5rem;
          }
          .content {
            border: 1px solid purple;
            &.header {
              text-align: center;
              font-size: 1.7rem;
              line-height: 3rem;
              letter-spacing: 0.4px;
              font-weight: 700;
              color: ${theme.colors.white};
            }
            &.icons {
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              grid-gap: 3rem;
              grid-auto-rows: minmax(3.5rem, auto);
              .icon {
                border: 1px solid grey;
                background-color: white;
                grid-column: span 3;
                @media (min-width: 768px) {
                  grid-column: span 2;
                }
                @media (min-width: 1094px) {
                  grid-column: span 1;
                }
              }
            }
          }
        }
      }
      &.grid-col-2-owners {
        width: 100%;
        background-color: yellow;
        .col-owner-content {
          margin: 0 auto;
          padding: 8rem 1.5rem 6rem;
          border: 2px solid navy;
          min-width: 375px;
          max-width: 1094px;
          height: 100%;
          display: grid;
          grid-gap: 3.5rem;
          grid-template-areas:
            "peter1"
            "robert"
            "peter2";
          @media (min-width: 768px) {
            padding: 12rem 1.5rem 8rem;
            max-width: 768px;
            grid-template-areas:
              "peter1 peter1 peter1 peter1 peter1 peter1"
              "robert robert robert peter2 peter2 peter2";
          }
          @media (min-width: 1094px) {
            padding: 12rem 3rem 8rem;
            max-width: 1094px;
            grid-template-areas: "peter1 peter1 robert robert peter2 peter2";
          }
          .owner {
            border: 1px solid orange;
            &:first-child {
              grid-area: peter1;
            }
            &:nth-child(2) {
              grid-area: robert;
            }
            &:last-child {
              grid-area: peter2;
            }
          }
        }
      }
      &.grid-col-3-about {
        width: 100%;
        background-color: lightpink;
        .col-about-content {
          margin: 0 auto;
          padding: 5.6rem 1.5rem 6.5rem;
          border: 2px solid navy;
          min-width: 375px;
          max-width: 1094px;
          height: 100%;
          display: grid;
          grid-template-areas: "text" "lists";
          grid-gap: 4.5rem;
          @media (min-width: 768px) {
            padding: 7rem 1.5rem 6.5rem;
            max-width: 768px;
          }
          @media (min-width: 1094px) {
            padding: 7rem 3rem 3rem;
            max-width: 1094px;
            grid-template-areas: "text lists lists";
          }
          .about-text {
            border: 2px solid green;
            grid-area: text;
          }
          .about-lists-block {
            border: 2px solid blue;
            grid-area: lists;
            display: grid;
            grid-gap: 6rem;
            grid-template-areas: "list-about list-developers";
            @media (min-width: 1094px) {
              grid-template-areas: "list-about list-developers list-developers";
            }

            .list-about {
              border: 2px solid orange;
              grid-area: list-about;
            }
            .list-developers {
              border: 2px solid green;
              grid-area: list-developers;
            }
          }
        }
      }
    }
  }
  .side-image {
    width: 314px;
    height: 289px;
    position: absolute;
    top: -188px;
    left: -80px;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
      transform: scale(1.2);
      object-fit: contain;
    }
    @media (min-width: 768px) {
      width: 441px;
      height: 406;
      left: -144px;
      top: -188px;
    }
  }
  .copyrights {
    border: 1px solid purple;
    min-width: 375px;
    max-width: 1094px;
    margin: 0 auto;
    padding-left: 1.5rem;
    @media (min-width: 768px) {
      max-width: 768px;
    }
    @media (min-width: 1094px) {
      max-width: 1094px;
    }
  }
`;
