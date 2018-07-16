import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectCurrentProject } from '../actions';

const mapStateToProps = state => {
  return { projects: state.Projects };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCurrentProject: bindActionCreators(selectCurrentProject, dispatch)
  };
};

class Projects extends Component {
  constructor(props, context) {
    super(props, context);
    this.selectProject = this.selectProject.bind(this);
  }

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

const ProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

export default ProjectList;
