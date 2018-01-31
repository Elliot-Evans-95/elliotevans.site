import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './../Reducers/reducers';
import { fetchProjects, toggleProject } from '../Actions/actions';

// Log the initial state
// console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

// Dispatch some actions
// store.dispatch();

// Stop listening to state updates
// unsubscribe();

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

store.dispatch(toggleProject(1));
store
  .dispatch(fetchProjects('reactjs'))
  .then(() => console.log(store.getState()));

export default store;
