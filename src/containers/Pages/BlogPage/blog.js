import React from 'react';

import { Main, EECite } from '../../../assets/styles/styles';
import Card from '../../../components/card';

const Blog = () => {
  const testText = ['', '', '', 'test'];

  return (
    <Main>
      <h2>Blog</h2>
      <Card text={testText} />
      <EECite>Time and stuff</EECite>
    </Main>
  );
};

export default Blog;
