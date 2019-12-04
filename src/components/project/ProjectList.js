import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { selectCurrentProject } from '../../shared/actions';
import { ProjectsList } from './ProjectList.style';

const mapStateToProps = state => ({ projects: state.Projects });
const mapDispatchToProps = dispatch => ({
  selectCurrentProject: bindActionCreators(selectCurrentProject, dispatch),
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
      <li
        className={'project-button' + (project.is_selected ? ' selected' : '')}
        key={project.id}
      >
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
};

export default Projects;
