import * as React from 'react';
import { Main } from '../../styles/styles';
import BlogList from '../blogList';
import { memo } from 'react';
import { IHomePageProps } from '../../models/home.types';
import Newsletter from '../newsletter';

const Home = (home: IHomePageProps) => {
  if (home.props.length === 0) {
    return (<Main><Newsletter /></Main>);
  } else {
    return (
      <Main>
        <BlogList blog={home.props} />
        {/*TODO: Add a section for other stuff (talks, courses, podcasts) */}
        <Newsletter />
      </Main>
    );
  }
};

export default memo(Home);
