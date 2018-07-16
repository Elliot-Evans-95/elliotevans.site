import React from 'react';

import { Main } from '../../../assets/styles/styles';
import Card from '../../../components/card';
import Banner from '../../../components/banner';

const About = () => {
  const text = [
    'About me',
    '',
    'Example',
    'There would be a short description from one of my blog posts but instead here is some placeholder text'
  ];

  return (
    <Main>
      <Banner text={text} />
      <Card text={text} />
    </Main>
  );
};

export default About;
