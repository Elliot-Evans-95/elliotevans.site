// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { selectCurrentProject } from '../actions';

const mapStateToProps = state => {
  return { projects: state.Projects };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCurrentProject: bindActionCreators(selectCurrentProject, dispatch)
  };
};

class Projects extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.selectProject = this.selectProject.bind(this);
  }

  // Added this in as its a reminder that you can add default props into the component
  // static defaultProps = {}

  selectProject(id) {
    this.props.selectCurrentProject(id);
  }

  render() {
    return this.props.projects.map(project => (
      <li key={project.id}>
        {project.title}
        <button onClick={() => this.props.selectCurrentProject(project.id)}>
          MAKE ACTIVE
        </button>
      </li>
    ));
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  selectCurrentProject: PropTypes.func
};

const ProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

export default ProjectList;
