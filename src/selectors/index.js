const getProjects = state => state.Projects;

export const getSelectedProject = state => {
  const resources = getProjects(state);
  return resources.filter(project => project.is_selected === true);
};
