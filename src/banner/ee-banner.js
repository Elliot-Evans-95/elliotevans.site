import React, { Component } from 'react';

import { Title, SubHeading, Header, MyFace } from './../styles';

class EEBanner extends Component {
  render() {
    return (
      <Header>
        <MyFace
          src="https://avatars0.githubusercontent.com/u/22132230?s=400&v=4"
          alt="My face"
        />
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
