import { initialState } from '../state/initialState';
import {
  ADD_ARTICLE,
  FETCH_PRODUCTS_SUCCESS,
  MAKE_CURRENT_PROJECT_SELECTED
} from '../constants/action-types';

let index = 0;

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      if (index >= 6) {
        const filteredPayload = () =>
          state.Posts.map(post =>
            post.markdown.filter(markdown => markdown !== action.payload)
          )
            .flat()
            .sort(
              (a, b) => new Date(b.header[0].date) - new Date(a.header[0].date)
            );

        const mapPosts = state.Posts.map(post => ({
          id: post.id,
          test: post.test,
          markdown: filteredPayload()
        }));

        console.log(mapPosts);

        index++;

        return { ...state, Posts: [...mapPosts] };
      } else {
        const mapInitialPosts = state.Posts.map(post => ({
          id: post.id,
          test: post.test,
          markdown: post.markdown
            .concat(action.payload)
            .sort(
              (a, b) => new Date(b.header[0].date) - new Date(a.header[0].date)
            )
        }));

        index++;

        return { ...state, Posts: [...mapInitialPosts] };
      }

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
