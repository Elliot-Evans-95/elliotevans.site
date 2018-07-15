import React from 'react';

import { Main } from '../../../assets/styles/styles';
import PropTypes from 'prop-types';
import Card from '../../../components/card';
import Banner from '../../../components/Banner';

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

About.propTypes = {
  something: PropTypes.object
};

export default About;
