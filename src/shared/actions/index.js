import {
  ADD_ARTICLE,
  FETCH_PRODUCTS_SUCCESS,
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

export const fetchProductsSuccess = posts => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: posts
});
