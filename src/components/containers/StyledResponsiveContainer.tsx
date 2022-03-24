import styled from "styled-components";

export const StyledResponsiveContainer = styled.div`
  min-width: 37.5rem;
  margin: 0 auto;
  height: auto;

  @media (min-width: 768px) {
    min-width: 768px;
  }
  @media (min-width: 1094px) {
    width: 1094px;
  }
`;
