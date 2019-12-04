import * as React from 'react';
import { Main } from '../../styles/styles';
import BlogList from '../blogList';
import Helmet from 'react-helmet';
import { IEdge } from '../../pages';

export const Home = (home: Array<IEdge>) => {
  const title = 'Elliot Evans - Home';
  const desc = 'Home Page';
  const keywords =
    'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

  if (home.length === 0) {
    return (
      <Main>
        <Helmet>
          <title>{title}</title>
          <meta name={'description'} content={desc} />
          <meta name={'keywords'} content={keywords} />
        </Helmet>
      </Main>
    )
  } else {
    return (
      <Main>
        <Helmet>
          <title>{title}</title>
          <meta name={'description'} content={desc} />
          <meta name={'keywords'} content={keywords} />
        </Helmet>
        <BlogList blog={home} />
      </Main>
    )
  }

};
