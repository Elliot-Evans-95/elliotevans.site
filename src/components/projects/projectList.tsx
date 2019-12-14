import * as React from 'react';
import { ProjectsListWrapper } from './ProjectList.style';
import { memo } from 'react';
import Project from '../project/Project';

const ProjectList = (projects: Array<any>) => {
  const renderProjects = (projects: Array<any>) =>
    projects.projects.map(project => (
      <Project key={project.node.id} project={project.node.excerpt} />
    ));

  return <ProjectsListWrapper>{renderProjects(projects)}</ProjectsListWrapper>;
};

export default memo(ProjectList);
