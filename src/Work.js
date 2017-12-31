import React, { Component } from 'react';

import { Projects } from './Store/store';
import WorkHeader from './work-header';
import { WorkGrid, WorkContent, WorkNavigation } from './styles';

type Prop = Array;

class Work extends Component<Prop> {
  render() {
    return (
      <WorkGrid>
        <WorkNavigation>Nav</WorkNavigation>
        <WorkHeader projects={Projects} />
        <WorkContent>Content</WorkContent>
      </WorkGrid>
    );
  }
}

export default Work;
