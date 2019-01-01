import { initialState } from '../state/initialState';
import {
  ADD_ARTICLE,
  FETCH_PRODUCTS_SUCCESS,
  MAKE_CURRENT_PROJECT_SELECTED
} from '../constants/action-types';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      const mapPosts = state.Posts.map(post => ({
        id: post.id,
        test: post.test,
        markdown: post.markdown.concat(action.payload)
      }));

      return { ...state, Posts: [...mapPosts] };
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

      return { ...state, Projects: [...mapProjects] };
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default appReducer;
