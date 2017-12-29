import React, { Component } from 'react';
import './App.css';
import EEBanner from './banner/ee-banner';
import EECard from './card/ee-card';
import { Main } from './styles';

class Home extends Component {
  render() {
    const text = [
      'Hello, this is Elliot Evans.',
      'Front-end Developer here...',
      'Example',
      'There would be a short description from one of my blog posts but instead here is some placeholder text'
    ];

    return (
      <Main>
        <EEBanner text={text} />
        <EECard text={text} />
      </Main>
    );
  }
}

export default Home;
