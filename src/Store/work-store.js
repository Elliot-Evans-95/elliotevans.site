// import { createStore } from 'redux'
//
// // a "reducer" that handle some events and return a state
// function counter(state = 0, action) {
//     return  action.type === 'INCREMENT' ? state + 1
//         : action.type === 'DECREMENT' ? state - 1
//             : state;
// }
//
// let store = createStore(counter)
//
// store.subscribe(() =>
//     console.log(store.getState())
// )
//
// store.dispatch({ type: 'INCREMENT' }) // 1
// store.dispatch({ type: 'INCREMENT' }) // 2
// store.dispatch({ type: 'DECREMENT' }) // 1
