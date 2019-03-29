import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BlogCardTitle = styled.header`
  display: inline-block;
  //background: rgba(74,84,89,0.2);
  //padding: 0.5rem 1rem;
  padding: 0.5rem 0rem;
  max-width: 20rem;
  text-align: left;
  z-index: 5;
  
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  
  position: absolute
  top: -31px;
  left: 0;
  
  h5 {
    margin: 0;
  }
`;

export const BlogCardLink = styled(NavLink)`
  color: #0078d7;
  text-decoration: none;

  position: absolute;
  top: -1.5rem;
  right: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;
