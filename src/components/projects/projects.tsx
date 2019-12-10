import * as React from 'react';
import ProjectList from './projectList';
import { memo } from 'react';

const Projects = (projects: any) => {
  return (
    <div>
      <p>Projects</p>
      <ProjectList projects={projects.props}/>
    </div>
  );
};

export default memo(Projects);
