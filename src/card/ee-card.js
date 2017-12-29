import React, { Component } from 'react';

import { TextContainer } from './../styles';

class EECard extends Component {
  render() {
    return (
      <TextContainer>
        <p>
          {this.props.text[3]}
        </p>
      </TextContainer>
    );
  }
}

export default EECard;
