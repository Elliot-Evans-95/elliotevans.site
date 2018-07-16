import React from 'react';

import Project from '../../../components/project';
import ProjectList from '../../../components/project-list';

import { WorkGrid } from '../../../assets/styles/styles';

const Work = () => (
  <WorkGrid>
    <ProjectList />
    <Project />
  </WorkGrid>
);

export default Work;
