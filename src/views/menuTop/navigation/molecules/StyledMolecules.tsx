import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100vw;
  min-width: 37.5rem;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  list-style-type: none;
  margin: 0 auto;
  padding: 2.5rem 3rem;
  position: absolute;
  top: 6.6rem;
  left: -133px;
  display: none;
  &.active {
    display: flex;
    @media (min-width: 1094px) {
      display: none;
    }
  }
  @media (min-width: 1094px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0 34px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
