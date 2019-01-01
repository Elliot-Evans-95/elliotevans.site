const getProjects = state => state.Projects;

export const getSelectedProject = state =>
  getProjects(state).filter(project => project.is_selected === true);
