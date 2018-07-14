import React from 'react';
import PropTypes from 'prop-types';

import WorkHeader from './work-header';
import WorkNav from './work-nav';
import WorkContent from './work-content';
import { WorkGrid } from '../../styles';

const Work = ({ projects, onProjectClick }) => (
  <WorkGrid>
    {/*<WorkNav projects={projects} onProjectClick={onProjectClick} />*/}
    {/*<WorkHeader projects={projects} />*/}
    {/*<WorkContent>Content</WorkContent>*/}
  </WorkGrid>
);

// Work.propTypes = {
// Projects: PropTypes.array,
// onProjectClick: PropTypes.func.isRequired
// };

export default Work;
