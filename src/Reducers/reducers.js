import { combineReducers } from 'redux';
import { Projects } from '../Data/data';

// const initialState = {...Projects};
const initialState = { Projects };

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PROJECT':
      return state.Projects.map(project => {
        return project.id === action.id
          ? { ...project, selected: !project.is_selected }
          : project;
      });
    default:
      return state;
  }
};

export const reducer = combineReducers({
  projects
});
