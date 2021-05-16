import { styled } from '@linaria/react';
import { css } from 'linaria';

export const BlogCardTitle = styled.header`
  display: inline-block;
  padding: 0.5rem 0;
  z-index: 5;

  h5 {
    margin: 0 0 0 1rem;
  }

  &:hover {
    h2 {
      color: var(--cite-text-color);
    }
  }
`;

export const BlogCardLink = css`
  display: block;
  text-decoration: none;

  h2 {
    transition: color 200ms ease-in;
  }
`;
