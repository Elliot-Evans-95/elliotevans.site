import React from 'react';

import { Helmet } from 'react-helmet';

import { Main, EECite } from '../../../assets/styles/styles';
import Card from '../../../components/card';

const Blog = () => {
  const testText = ['', '', '', 'test'];

  return (
    <Main>
      <Helmet>
        <title>Elliot Evans - Blog</title>
        <meta name="description" content="Blog Page" />
        <meta
          name="keywords"
          content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
        />
      </Helmet>
      <h2>Blog</h2>
      <Card text={testText} />
      <EECite>Time and stuff</EECite>
    </Main>
  );
};

export default Blog;
