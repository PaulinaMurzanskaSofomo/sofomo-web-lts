import styled from "styled-components";

export const StyledPartnersLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3rem;
  grid-auto-rows: minmax(3.5rem, auto);
  .icon {
    grid-column: span 3;
    @media (min-width: 768px) {
      grid-column: span 2;
    }
    @media (min-width: 1094px) {
      grid-column: span 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
