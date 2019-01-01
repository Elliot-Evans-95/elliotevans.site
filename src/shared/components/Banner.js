// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  HeaderGroup,
  MyFace,
  SubHeading,
  Title
} from '../styles/styles';

const Banner = props => {
  return (
    <Header>
      <MyFace
        src="https://avatars0.githubusercontent.com/u/22132230?s=400&v=4"
        alt="My face"
      />
      <HeaderGroup>
        <Title>{props.text[0]}</Title>
        <SubHeading>{props.text[1]}</SubHeading>
      </HeaderGroup>
    </Header>
  );
};

Banner.propTypes = {
  text: PropTypes.array
};

export default Banner;
