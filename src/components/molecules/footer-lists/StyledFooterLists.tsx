import styled from "styled-components";

export const StyledFooterLists = styled.div`
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1094px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
