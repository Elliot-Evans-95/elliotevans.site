import * as React from 'react';
import { memo } from 'react';
import { ProjectCard, ProjectCardContent, ProjectCardHeading, ProjectCardImage } from '../../styles/styles';

interface IProjectCard {
  index: number;
  project: {
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      featuredImage: string;
    };
    id: string;
    timeToRead: number;
  };
}

const Project = (project: IProjectCard) => {
  const tiltImageViaIndex = (index: number) => index % 2 ? 'tilt-right' : 'tilt-left';
  return (
    <ProjectCard>
      <ProjectCardImage src={project.project.frontmatter.featuredImage} className={tiltImageViaIndex(project.index)}/>
      <ProjectCardHeading>{project.project.frontmatter.title}</ProjectCardHeading>
      <ProjectCardContent>
        <p>{project.project.excerpt}</p>
      </ProjectCardContent>
    </ProjectCard>
  );
};

export default memo(Project);
