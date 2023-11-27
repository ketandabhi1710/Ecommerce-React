import React from "react";
import styled from "styled-components";

interface WrapperProps {
  theme?: {
    media?: {
      mobile?: string;
      // other media properties
    };
    // other theme properties
  };
}

const Wrapper = styled.section<WrapperProps>`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme?.media?.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

const Products: React.FC = () => {
  return (
    <Wrapper>
      <h1>fasdlaj</h1>
    </Wrapper>
  );
};

export default Products;
