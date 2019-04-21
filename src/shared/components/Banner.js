// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Header, MyFace, SubHeading, Title } from '../styles/styles';

const Banner = props => {
  return (
    <Header>
      <MyFace
        src="https://avatars0.githubusercontent.com/u/22132230?s=400&v=4"
        alt="My face"
      />
      <Title>{props.text[0]}</Title>
      <SubHeading>{props.text[1]}</SubHeading>
    </Header>
  );
};

Banner.propTypes = {
  text: PropTypes.array
};

export default Banner;
