import * as React from 'react';
import { Main } from '../../styles/styles';
import BlogList from '../blogList';
import Helmet from 'react-helmet';
import { IEdge } from '../../pages';

interface IHomePageProps {
  props: Array<IEdge>;
}

export const Home = (home: IHomePageProps) => {
  if (home.props.length === 0) {
    return (
      <Main/>
    );
  } else {
    return (
      <Main>
        <BlogList blog={home.props} />
      </Main>
    );
  }
};
