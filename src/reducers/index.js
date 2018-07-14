import { ADD_ARTICLE, SELECT_PROJECT } from '../constants/action-types';

const initialState = {
  articles: [
    {
      id: 1,
      title: 'yo'
    }
  ],
  projects: [
    {
      id: 1,
      project: 'test1'
    },
    {
      id: 2,
      project: 'test2'
    }
  ],
  selectedProject: {
    id: 3,
    project: 'test3'
  }
};

const rootReducer = (state = initialState, action) => {
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
