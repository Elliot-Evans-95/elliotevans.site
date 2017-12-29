import React, { Component } from 'react';

import { Title, SubHeading, Header, MyFace, HeaderGroup } from './../styles';

class EEBanner extends Component {
  render() {
    return (
      <Header>
        <MyFace
          src="https://avatars0.githubusercontent.com/u/22132230?s=400&v=4"
          alt="My face"
        />
        <HeaderGroup>
          <Title>
            {this.props.text[0]}
          </Title>
          <SubHeading>
            {this.props.text[1]}
          </SubHeading>
        </HeaderGroup>
      </Header>
    );
  }
}

export default EEBanner;
