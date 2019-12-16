import * as React from 'react';
import { ProjectsListWrapper } from './ProjectList.style';
import { memo } from 'react';
import Project from '../project/Project';

interface IProjects {
  projects: Array<IProject>;
}

export interface IProject {
  node: {
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      featuredImage: string;
    };
    id: string;
    timeToRead: number;
  }
}

const ProjectList = (projects: IProjects) => {
  const renderProjects = (projects: IProjects) =>
    projects.projects.map( (project, index) => (
      <Project key={project.node.id} project={project.node} index={index}/>
    ));

  return <ProjectsListWrapper>{renderProjects(projects)}</ProjectsListWrapper>;
};

export default memo(ProjectList);
