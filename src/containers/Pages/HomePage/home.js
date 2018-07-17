import React from 'react';

import { Helmet } from 'react-helmet';

import { Main } from '../../../assets/styles/styles';
import Card from '../../../components/card';
import Test from '../../../components/test';
import HigherTest from '../../../components/higher-test';
import Banner from '../../../components/banner';

const Home = () => {
  const text = [
    'Hello, this is Elliot Evans.',
    'Front-end Developer here...',
    'Example',
    'There would be a short description from one of my blog posts but instead here is some placeholder text'
  ];

  return (
    <Main>
      <Helmet>
        <title>Elliot Evans - Home</title>
        <meta name="description" content="Home Page" />
        <meta
          name="keywords"
          content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
        />
      </Helmet>
      <Banner text={text} />
      <Card text={text} />
      <Test />
      <HigherTest />
    </Main>
  );
};

export default Home;
