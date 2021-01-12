import styled from '@emotion/styled';
import Link from 'gatsby-link';

export const BlogCardTitle = styled.header`
  display: inline-block;
  padding: 0.5rem 0;
  z-index: 5;
  
  h5 {
    margin: 0 0 0 1rem;
  }
`;

export const BlogCardLink = styled(Link)`
  display: block;
  text-decoration: none;

  h2 {
    transition: color 200ms ease-in;
  }

  &:hover {
    h2 {
      color: #0078d7;
    }
  }
`;
