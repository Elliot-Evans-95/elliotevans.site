import * as React from 'react';
import { VNode } from 'preact';
import { memo } from 'preact/compat';
import { IHomePageProps } from '../../models/home.types';
import { Main } from '../../styles/common.style';
import Newsletter from '../newsletter/newsletter';
import BlogList from '../blog-list/blog-list';

const Home = (home: IHomePageProps): VNode => {
  if (home.props.length === 0) {
    return (
      <Main>
        <Newsletter />
      </Main>
    );
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
