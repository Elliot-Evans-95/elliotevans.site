import React, { Component } from 'react';

import { WorkHeaderContent } from '../../styles';
import { FallbackProjects } from '../../Data/store';

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
    const allProjects = this.state.projects.map(project =>
      <div key={project.id}>
        {project.title}
      </div>
    );

    return (
      <WorkHeaderContent>
        {allProjects}
      </WorkHeaderContent>
    );
  }
}

export default WorkHeader;
