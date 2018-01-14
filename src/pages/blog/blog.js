import React from 'react';

import EECard from '../../components/card/ee-card';
import { Main, EECite } from '../../styles';

const Blog = () => {
  const testText = ['', '', '', 'test'];

  return (
    <Main>
      <h2>Blog</h2>
      <EECard text={testText} />
      <EECite>Time and stuff</EECite>
    </Main>
  );
};

export default Blog;
