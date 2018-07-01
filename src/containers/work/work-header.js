import React, { Component } from 'react';

import { WorkHeaderContent } from '../../styles';
import { FallbackProjects } from '../../initial-state';

type State = {
  projects: Array
};

class WorkHeader extends Component<State> {
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

  render() {
    let allProjects = this.state.projects.map(project => {
      if (project.is_selected === true) {
        return <div key={project.id}> {project.title} </div>;
      } else {
        return <div key={project.id}> No Projects Selected </div>;
      }
    });

    return <WorkHeaderContent>{allProjects}</WorkHeaderContent>;
  }
}

export default WorkHeader;
