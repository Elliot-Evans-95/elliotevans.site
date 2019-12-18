import * as React from 'react';
import { ProjectsListWrapper } from './projectList.style';
import { memo } from 'react';
import Project from '../project/Project';
import { IProject } from '../../models/project.types';

interface IProjects {
  projects: Array<IProject>;
}

const ProjectList = (projects: IProjects) => {
  const renderProjects = (projects: IProjects) =>
    projects.projects.map((project, index) => (
      <Project key={project.node.id} project={project.node} index={index} />
    ));

  return <ProjectsListWrapper>{renderProjects(projects)}</ProjectsListWrapper>;
};

export default memo(ProjectList);
