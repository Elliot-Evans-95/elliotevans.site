import React, { Component } from 'react';

import { Title, SubHeading, Header } from './../styles';

class EEBanner extends Component {
  render() {
    return (
      <Header>
        <Title>
          {this.props.text[0]}
        </Title>
        <SubHeading>
          {this.props.text[1]}
        </SubHeading>
      </Header>
    );
  }
}

export default EEBanner;
