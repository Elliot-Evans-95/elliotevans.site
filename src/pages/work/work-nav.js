import React from 'react';
import PropTypes from 'prop-types';

import { WorkNavigation } from '../../styles';

// type State = {
//   projects: Array
// };

const WorkNav = ({ projects, onProjectClick }) =>
  <WorkNavigation>
    {projects.map(project =>
      <div key={project.id}>
        {project.title}
        <button onClick={() => onProjectClick(project.id)}>
          {project.is_selected ? 'ON' : 'OFF'}
        </button>
      </div>
    )}
  </WorkNavigation>;

// class WorkNav extends Component<State> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       projects: FallbackProjects
//     };
//   }
//
//   componentDidMount() {
//     this.setState(() => ({
//       projects: this.props.projects
//     }));
//   }
//
//   handleClick(id) {
//     this.setState(prevState => ({
//       projects: prevState.projects.map(project => {
//         project.is_selected = project.id === id;
//         return project;
//       })
//     }));
//   }
//
//   render() {
//     const allProjects = this.state.projects.map(project =>
//       <div key={project.id}>
//         {project.title}
//         <button onClick={() => onProjectClick(project.id)}>
//           {project.is_selected ? 'ON' : 'OFF'}
//         </button>
//       </div>
//     );
//
//     return (
//       <WorkNavigation>
//         {allProjects}
//       </WorkNavigation>
//     );
//   }
// }

WorkNav.propTypes = {
  onProjectClick: PropTypes.func.isRequired
};

export default WorkNav;
