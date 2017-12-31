import React, { Component } from 'react';

import { WorkHeaderContent } from './styles';

type State = {
  projects: Array
};

const fallbackProjects = [
  {
    id: 0,
    title: 'loading...'
  }
];

class WorkHeader extends Component<State> {
  constructor(props) {
    super(props);
    this.state = {
      projects: fallbackProjects
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      projects: this.props.projects
    }));
  }

  render() {
    return (
      <WorkHeaderContent>
        {this.state.projects.map(test => {
          console.log(test);
          return (
            <div key={test.id}>
              {test.title}
            </div>
          );
        })}
      </WorkHeaderContent>
    );
  }
}

export default WorkHeader;
