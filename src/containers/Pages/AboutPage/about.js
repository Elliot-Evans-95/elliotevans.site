// @flow

import React from 'react';

import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Elliot Evans - About</title>
        <meta name="description" content="About Page" />
        <meta
          name="keywords"
          content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
        />
      </Helmet>
      <Banner text={text} />
      <Card text={text} />
    </Main>
  );
};

export default About;
