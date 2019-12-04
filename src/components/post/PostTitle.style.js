import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BlogCardTitle = styled.header`
  display: inline-block;
  padding: 0.5rem 0rem;
  max-width: 50vw;
  text-align: left;
  z-index: 5;
  
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  
  position: absolute
  top: -5rem;
  left: 0;
  
  h5 {
    margin: 0 0 0 1rem;;
  }
`;

export const BlogCardLink = styled(NavLink)`
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
