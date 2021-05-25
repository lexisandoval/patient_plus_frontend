import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import myDoctors from './reducers/doctors/myDoctors';
import doctorForm from './reducers/doctors/doctorForm';

import myMedications from './reducers/medications/myMedications';
import medicationForm from './reducers/medications/medicationForm'

import myConditions from './reducers/conditions/myConditions';
import conditionForm from './reducers/conditions/conditionForm';

const reducer = combineReducers({
  users: usersReducer, // "users" shows up in store, points to usersReducer in users.js file
  currentUser,
  loginForm,
  signupForm,
  myDoctors, 
  doctorForm,
  myMedications,
  medicationForm,
  myConditions,
  conditionForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store