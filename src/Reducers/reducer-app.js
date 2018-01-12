// First State
import { combineReducers } from 'redux';

const initialState = function() {
  return {
    name: 'elliot'
  };
};

// Reducers
export const rootReducer = combineReducers({
  name: nameReducer
});

function nameReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return action.name;
    default:
      return state.name;
  }
}
