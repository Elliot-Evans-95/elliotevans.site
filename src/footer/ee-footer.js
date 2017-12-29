import React, { Component } from 'react';

import { Footer } from './../styles';

class EEFooter extends Component {
  render() {
    return (
      <Footer>
        <p>
          Made by Elliot Evans with{' '}
          <span role="img" aria-label="coffee">
            ☕
          </span>{' '}
          | 2018
        </p>
      </Footer>
    );
  }
}

export default EEFooter;
