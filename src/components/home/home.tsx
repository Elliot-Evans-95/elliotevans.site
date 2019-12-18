import * as React from 'react';
import { Main } from '../../styles/styles';
import BlogList from '../blogList';
import { memo } from 'react';
import { IHomePageProps } from '../../models/home.types';

const Home = (home: IHomePageProps) => {
  if (home.props.length === 0) {
    return <Main />;
  } else {
    return (
      <Main>
        <BlogList blog={home.props} />
      </Main>
    );
  }
};

export default memo(Home);
