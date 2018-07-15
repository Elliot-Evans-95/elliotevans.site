import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 1.25rem;
  margin-top: 0;

  @media (min-width: 30em) {
    margin-top: 0.67em;
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 1rem;

  @media (min-width: 30em) {
    font-size: 1.25rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;

  padding-bottom: 1em;
`;

export const TextContainer = styled.section`
  background: rgba(74, 84, 89, 0.2);
  position: relative;
  padding: 0.5rem 1rem;

  ::before {
    content: ' ';
    position: absolute;
    display: block;
    //border: 0.5rem solid #4c595d;
    border: 0.5rem solid #0078d7;
    height: calc(100% - 1em);
    left: -2em;
    top: 0;
  }
`;

export const EEFooter = styled.footer`
  grid-area: footer;

  background: #0078d7;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  grid-area: main;

  padding: 1rem;

  @media (min-width: 0em) {
    padding: 0;
    width: 80vw;
    margin: 0 auto;
  }

  @media (min-width: 45em) {
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
  color: #0078d7;
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

export const WorkGrid = styled.main`
  grid-area: main;

  display: grid;

  grid-template-rows: 12em auto auto;
  grid-template-columns: 6em calc(100vw - 6em);
  grid-template-areas:
    'work-nav work-header' 'work-nav work-content'
    'work-nav work-content';
`;

export const WorkNavigation = styled.nav`
  grid-area: work-nav;

  background: #0078d7;
`;
export const WorkHeaderContent = styled.header`
  grid-area: work-header;

  background: #0063b1;
`;
export const WorkContentContent = styled.section`
  grid-area: work-content;

  background: rgba(76, 74, 72, 0.6);
`;

export const EECite = styled.cite`
  display: block;

  text-align: right;

  padding-top: 1rem;
  margin-bottom: 2em;
`;

export const ContactSection = styled.section`
  display: flex;

  background: rgba(118, 118, 118, 0.5);
`;
