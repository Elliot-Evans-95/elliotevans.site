import React from 'react';
import PropTypes from 'prop-types';

// import { Projects } from '../../Data/store';

import WorkHeader from './work-header';
import WorkNav from './work-nav';
import WorkContent from './work-content';
import { WorkGrid } from '../../styles';

type Props = {
  Projects: Array
};

const Work = (props: Props) => {
  return (
    <WorkGrid>
      <WorkNav projects={props.Projects} />
      <WorkHeader projects={props.Projects} />
      <WorkContent>Content</WorkContent>
    </WorkGrid>
  );
};

Work.defaultProps = {
  Projects: [
    {
      id: 1,
      title: 'title 1',
      icon: '',
      short_description: '',
      long_description: '',
      main_image: '',
      is_selected: false
    },
    {
      id: 2,
      title: 'title 2',
      icon: '',
      short_description: '',
      long_description: '',
      main_image: '',
      is_selected: false
    },
    {
      id: 3,
      title: 'title 3',
      icon: '',
      short_description: '',
      long_description: '',
      main_image: '',
      is_selected: false
    },
    {
      id: 4,
      title: 'title 4',
      icon: '',
      short_description: '',
      long_description: '',
      main_image: '',
      is_selected: false
    }
  ]
};

Work.propTypes = {
  Projects: PropTypes.array
};

export default Work;
