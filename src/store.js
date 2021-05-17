import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import myDoctors from './reducers/myDoctors';


const reducer = combineReducers({
  users: usersReducer, // "users" shows up in store, points to usersReducer in users.js file
  currentUser,
  loginForm,
  myDoctors
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store