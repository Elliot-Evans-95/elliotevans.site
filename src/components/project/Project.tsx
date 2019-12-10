import * as React from 'react';
import { memo } from 'react';

const Project = (project: any) => {
  console.log(project);
  return (
    <div>
      <h1>Project</h1>
    </div>
  );
};

export default memo(Project);
