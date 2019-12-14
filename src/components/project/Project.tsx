import * as React from 'react';
import { memo } from 'react';

const Project = (project: any) =>
  (
    <div>
      <h1>{project.project}</h1>
    </div>
  );

export default memo(Project);
