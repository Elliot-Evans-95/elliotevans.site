import React from 'react';

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
      <Banner text={text} />
      <Card text={text} />
      <Test />
      <HigherTest />
    </Main>
  );
};

export default Home;
