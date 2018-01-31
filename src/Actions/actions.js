export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
function requestProjects() {
  return {
    type: REQUEST_PROJECTS
  };
}

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
function receiveProjects(data) {
  return {
    type: RECEIVE_PROJECTS,
    projects: data.map(project => project),
    receivedAt: Date.now()
  };
}

export const toggleProject = id => ({
  type: 'TOGGLE_PROJECT',
  id
});

export function fetchProjects() {
  return function(dispatch) {
    dispatch(requestProjects());

    return fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => data, error => console.log('An error occurred.', error))
      .then(data => dispatch(receiveProjects(data)));
  };
}
