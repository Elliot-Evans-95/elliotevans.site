import React from 'react';
import { connect } from 'react-redux';

import EEBanner from '../../components/banner/ee-banner';
import EECard from '../../components/card/ee-card';
import { Main } from '../../styles';
import PropTypes from 'prop-types';

const mapStateToProps = function(state) {
  console.log(state);

  return {
    something: state.something
  };
};

type Props = {
  something: Object.isRequired,
  text: Array
};

const Home = (props: Props) => {
  const text = [
    'Hello, this is Elliot Evans.',
    'Front-end Developer here...',
    'Example',
    'There would be a short description from one of my blog posts but instead here is some placeholder text'
  ];

  return (
    <Main>
      <section />
      <EEBanner text={text} something={props.something} />
      <EECard text={text} />
    </Main>
  );
};

Home.defaultProps = {
  something: { name: 'Elliot' }
};

Home.propTypes = {
  something: PropTypes.object
};

export default connect(mapStateToProps)(Home);
