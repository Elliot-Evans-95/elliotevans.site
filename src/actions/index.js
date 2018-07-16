import {
  ADD_ARTICLE,
  MAKE_CURRENT_PROJECT_SELECTED
} from '../constants/action-types';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const selectCurrentProject = project => ({
  type: MAKE_CURRENT_PROJECT_SELECTED,
  payload: project
});
