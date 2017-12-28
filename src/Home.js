import React, { Component } from 'react';
import './App.css';
import Button from './button';
import EEBanner from './banner/ee-banner';

class Home extends Component {
  render() {
    const text = ['Hello.', 'Frontend Developer here...', 'Example'];

    return (
      <div>
        <h2>Home</h2>
        <EEBanner text={text} />
        <Button message={text[2]} />
      </div>
    );
  }
}

export default Home;
