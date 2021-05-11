import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 0;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 2rem 0;
  align-items: center;

  @media (min-width: 45em) {
    margin: 4rem 0;
    justify-content: center;
  }
`;

export const EEFooter = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  z-index: 1;

  p {
    color: #f2e0d7;
  }
`;

export const Main = styled.main`
  grid-area: main;

  padding: 1rem;

  @media (min-width: 0em) {
    padding: 0;
    margin: 0 auto;
  }

  @media (min-width: 45em) {
    padding: 0;
    margin: 0 auto;
  }
`;

export const AppNavigation = styled.nav`
  z-index: 10;

  grid-area: nav;

  font-size: 1.2rem;

  color: #f2e0d7;

  justify-content: flex-start;
  align-items: center;

  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    padding: 0;
    margin: 0;
  }
`;

export const ToggleTheme = styled.button`
  z-index: 10;
  grid-area: nav;
  width: 4rem;
  height: 4rem;
  justify-self: flex-end;
  margin: 1rem 0;
  text-shadow: 0 0 1rem #f2e0d7;
  background: none;
  font-size: 2rem;
  border: 0;
`;

export const NavItems = styled.li`
  display: inline-block;
  margin: 0 1em;
`;

export const MyFace = styled(GatsbyImage)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  box-shadow: 0 -2px 20px 0px rgb(0 0 0 / 40%), 0 0px 20px 0px rgb(0 0 0 / 20%);

  @media (min-width: 45em) {
    margin-right: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #f2e0d7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const AltCardContainer = styled.section`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 0 1rem;
  margin: 2rem 0 4rem 0;
  border-radius: 1rem;
  background: var(--card-text-color);

  //  just for the newsletter component
  max-width: 30rem;
`;

export const BlogCard = styled.section`
  position: relative;
  border-radius: 1rem;
  margin: 2rem 0;

  :first-of-type {
    margin-top: 2rem;
  }

  :last-child {
    margin-bottom: 6rem;
  }
`;

export const BlurImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5,
  p {
    z-index: 10;
    width: 75%;
  }

  div:nth-of-type(3) {
    width: 200px;
    height: 100px;
    background: white;
    filter: blur(5px);
    position: absolute;
    top: 1rem;
    border: 1em solid white;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  }

  div:nth-of-type(4) {
    width: 100px;
    height: 100px;
    background: white;
    filter: blur(10px);
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1em solid white;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  }

  div:nth-of-type(5) {
    width: 50px;
    height: 50px;
    background: white;
    filter: blur(15px);
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    border: 1em solid white;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const BlogPostWrapper = styled.section`
  padding: 1rem;
`;

export const BlogCardInfo = styled.div`
  display: flex;
  align-content: center;
`;

export const BlogCardInfoCite = styled.cite`
  width: 10rem;
  color: var(--cite-text-color);
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 0 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
  background: var(--card-backgound);

  p {
    text-align: left;
    color: var(--card-text-color);
  }
`;
