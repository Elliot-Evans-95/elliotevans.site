import {
  ADD_ARTICLE,
  MAKE_CURRENT_PROJECT_SELECTED
} from '../constants/action-types';
import { InitialState } from '../state/initial-state';

const rootReducer = (state = InitialState, action) => {
  switch (action.type) {
    case MAKE_CURRENT_PROJECT_SELECTED:
      const mapProjects = state.Projects.map(project => ({
        id: project.id,
        title: project.title,
        icon: project.icon,
        short_description: project.short_description,
        long_description: project.short_description,
        main_image: project.main_image,
        is_selected: project.id === action.payload
      }));

      return Object.assign({}, state, {
        Projects: mapProjects
      });
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
