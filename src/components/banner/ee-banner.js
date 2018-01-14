import React from 'react';
import PropTypes from 'prop-types';

import { Title, SubHeading, Header, MyFace, HeaderGroup } from '../../styles';

type Props = {
  text: Array
};

const EEBanner = (props: Props) => {
  return (
    <Header>
      <MyFace
        src="https://avatars0.githubusercontent.com/u/22132230?s=400&v=4"
        alt="My face"
      />
      <HeaderGroup>
        <Title>
          {props.text[0]}
        </Title>
        <SubHeading>
          {props.text[1]}
        </SubHeading>
      </HeaderGroup>
    </Header>
  );
};

EEBanner.defaultProps = {
  text: [
    'Hello, this is Elliot Evans.',
    'Front-end Developer here...',
    'Example',
    'There would be a short description from one of my blog posts but instead here is some placeholder text'
  ]
};

EEBanner.propTypes = {
  text: PropTypes.array
};

export default EEBanner;
