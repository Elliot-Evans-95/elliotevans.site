import React, { Component } from 'react';

import { Projects } from '../../Data/store';
import WorkHeader from './work-header';
import WorkNav from './work-nav';
import { WorkGrid, WorkContent } from '../../styles';

type Prop = Array;

class Work extends Component<Prop> {
  render() {
    return (
      <WorkGrid>
        <WorkNav projects={Projects} />
        <WorkHeader projects={Projects} />
        <WorkContent>Content</WorkContent>
      </WorkGrid>
    );
  }
}

export default Work;
