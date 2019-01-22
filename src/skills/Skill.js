// @flow

import React, { PureComponent } from 'react';

class Skill extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} alt={`${this.props.name} Image`} />
        <cite>{this.props.years} year(s)</cite>
      </div>
    );
  }
}

export default Skill;
