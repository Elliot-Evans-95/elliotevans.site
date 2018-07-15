import { ADD_ARTICLE, SELECT_PROJECT } from '../constants/action-types';
import { InitialState } from '../state/initial-state';

const rootReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return { ...state, selectedProject: action.payload };
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
