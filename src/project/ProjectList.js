// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { selectCurrentProject } from '../shared/actions';
import { ProjectsList } from './ProjectList.style';

// type Props = {
//   projects: PropTypes,
//   selectCurrentProject: PropTypes
// };

const mapStateToProps = state => ({ projects: state.Projects });
const mapDispatchToProps = dispatch => ({
  selectCurrentProject: bindActionCreators(selectCurrentProject, dispatch)
});

class Projects extends PureComponent {
  // selectProject: () => void;

  constructor(props, context) {
    super(props, context);
    this.selectProject = this.selectProject.bind(this);
  }

  // Added this in as its a reminder that you can add default props into the component
  // static defaultProps = {}

  projectList() {
    return this.props.projects.map(project => (
      <li className="project-button" key={project.id}>
        <button onClick={() => this.props.selectCurrentProject(project.id)}>
          <img src={project.icon} alt={project.title} />
        </button>
      </li>
    ));
  }

  selectProject(id) {
    this.props.selectCurrentProject(id);
  }

  render() {
    return <ProjectsList>{this.projectList()}</ProjectsList>;
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
