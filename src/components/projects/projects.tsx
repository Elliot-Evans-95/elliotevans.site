import * as React from 'react';
import ProjectList from './projectList';
import { memo } from 'react';
import PageHeader from '../contact/pageHeader';
import { ProjectsMain } from './projects.style';

// TODO: Type this up
const Projects = (projects: any) => {
  return (
    <ProjectsMain>
      <PageHeader
        heading={'Projects'}
        subHeading={'List of my finished or ongoing projects'}
      />
      <ProjectList projects={projects.props} />
    </ProjectsMain>
  );
};

export default memo(Projects);
