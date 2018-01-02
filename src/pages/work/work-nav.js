import React, { Component } from 'react';

import { WorkNavigation } from '../../styles';
import { FallbackProjects } from '../../Store/store';

type State = {
  projects: Array
};

class WorkNav extends Component<State> {
  constructor(props) {
    super(props);
    this.state = {
      projects: FallbackProjects
    };
  }

  componentDidMount() {
    this.setState(() => ({
      projects: this.props.projects
    }));
  }

  handleClick(id) {
    this.setState(prevState => ({
      projects: prevState.projects.map(project => {
        if (project.id === id) {
          project.is_selected = true;
        }
      })
    }));
  }

  render() {
    const allProjects = this.state.projects.map(project =>
      <div key={project.id}>
        {project.title}
        <button onClick={() => this.handleClick(project.id)}>
          {project.is_selected ? 'ON' : 'OFF'}
        </button>
      </div>
    );

    return (
      <WorkNavigation>
        {allProjects}
      </WorkNavigation>
    );
  }
}

export default WorkNav;
