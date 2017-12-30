import React, { Component } from 'react';

import EECard from './card/ee-card';
import { Main, EECite } from './styles';

class Blog extends Component {
  render() {
    return (
      <Main>
        <h2>Blog</h2>
        <EECard text={'test'} />
        <EECite>Time and stuff</EECite>
      </Main>
    );
  }
}

export default Blog;
