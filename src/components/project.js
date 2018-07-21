// @flow

import React from 'react';
import { connect } from 'react-redux';

import { getSelectedProject } from '../selectors';

const mapStateToProps = state => {
  return { project: getSelectedProject(state) };
};

const SelectedProject = ({ project }) => {
  return (
    <div>
      <p>{project[0].title}</p>
    </div>
  );
};

const Project = connect(mapStateToProps)(SelectedProject);

export default Project;
