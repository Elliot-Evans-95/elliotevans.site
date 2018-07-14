import { ADD_ARTICLE, SELECT_PROJECT } from '../constants/action-types';

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const selectProject = project => ({
  type: SELECT_PROJECT,
  payload: project
});
