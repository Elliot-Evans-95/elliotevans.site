import React, { Component } from 'react';

import { WorkGrid, WorkContent, WorkHeader, WorkNavigation } from './styles';

class Work extends Component {
  render() {
    return (
      <WorkGrid>
        <WorkNavigation>Nav</WorkNavigation>
        <WorkHeader>Header</WorkHeader>
        <WorkContent>Content</WorkContent>
      </WorkGrid>
    );
  }
}

export default Work;
