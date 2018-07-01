import React from 'react';
import PropTypes from 'prop-types';

import { WorkNavigation } from '../../styles';

const WorkNav = ({ projects, onProjectClick }) => (
  <WorkNavigation>
    {projects.map(project => (
      <div key={project.id}>
        {project.title}
        <button onClick={() => onProjectClick(project.id)}>
          {project.is_selected ? 'ON' : 'OFF'}
        </button>
      </div>
    ))}
  </WorkNavigation>
);

WorkNav.propTypes = {
  onProjectClick: PropTypes.func.isRequired
};

export default WorkNav;
