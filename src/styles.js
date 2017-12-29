import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`font-size: 1.5em;`;

export const SubHeading = styled.h3`font-size: 1.25em;`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
`;

export const TextContainer = styled.section`
  background: rgba(74, 84, 89, 0.2);
  position: relative;
  padding: 0.5rem 1rem;

  ::before {
    content: " ";
    position: absolute;
    display: block;
    //border: 0.5rem solid #4c595d;
    border: 0.5rem solid #0078d7;
    height: calc(100% - 1em);
    left: -2em;
    top: 0;
  }
`;

export const Footer = styled.footer`
  grid-area: footer;

  background: #0078d7;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  grid-area: main;

  padding: 1rem;

  @media (min-width: 30em) {
    padding: 0;
    width: 50vw;
    margin: 0 auto;
  }
`;

export const AppNavigation = styled.nav`
  grid-area: nav;

  font-size: 1rem;

  color: #0078d7;

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  height: 100%;
  align-items: center;

  @media (min-width: 30em) {
    justify-content: flex-end;
  }

  > ul {
    padding: 0;
    margin: 0;
  }
`;

export const NavItems = styled.li`
  display: inline-block;
  margin: 0 1em;
`;

export const MyFace = styled.img`
  width: 6em;
  height: 6em;
  border-radius: 50%;
`;

export const StyledLink = styled(Link)`
  color: #0078D7;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderGroup = styled.div`
  padding-left: 1rem;

  @media (min-width: 30em) {
    padding-left: 0;
  }
`;
