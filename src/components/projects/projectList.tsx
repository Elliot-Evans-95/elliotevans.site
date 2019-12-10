import * as React from 'react';
import { ProjectsListWrapper } from './ProjectList.style';
import { memo } from 'react';

const ProjectList = (projects: any) => {
  console.log(projects);
  return (
    <ProjectsListWrapper>
      <p>Project will show here</p>
    </ProjectsListWrapper>
  );
};

export default memo(ProjectList);
