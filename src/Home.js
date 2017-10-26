import React, { Component } from 'react';
import './App.css';
import Button from './button';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Button message={'Something'} />
      </div>
    );
  }
}

export default Home;
