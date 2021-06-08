import { styled } from '@linaria/react';
import { css } from 'linaria';

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
    color: var(--white);
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

export const ToggleThemeWrapper = styled.button`
  z-index: 100;
  grid-area: nav;
  width: 4rem;
  height: 4rem;
  justify-self: flex-end;
  margin: 1rem 0;
  text-shadow: 0 0 1rem var(--sky-color);
  background: none;
  font-size: 2rem;
  border: 0;
  overflow: visible;
`;

export const NavItems = styled.li`
  display: inline-block;
`;

export const profileImage = css`
  border-radius: 50%;
  box-shadow: 0 -2px 20px 0px rgb(0 0 0 / 40%), 0 0px 20px 0px rgb(0 0 0 / 20%);

  @media (min-width: 45em) {
    margin-right: 1rem;
  }
`;

export const StyledLink = css`
  color: var(--cite-text-color);
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
  background: var(--newsletter-background);

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

export const BlogCardInfo = styled.div`
  display: flex;
  align-content: center;
`;

export const BlogCardInfoCite = styled.cite`
  width: 10rem;
  color: var(--cite-text-color);
  margin-bottom: 2rem;
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
    color: var(--white);
  }
`;

export const BlogContent = styled.div`
  h2 {
    :first-child {
      margin-top: 0;
    }

    margin-top: 2.25rem;
  }
`;
