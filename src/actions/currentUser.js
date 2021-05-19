import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyDoctors } from "./myDoctors"

// synchronous
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user // same as user: user 
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


// asynchronous
export const login = (credentials, history) => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      }
      else {
        dispatch(setCurrentUser(user))
        dispatch(getMyDoctors())
        dispatch(resetLoginForm())
        history.push('/') // redirect to / after log in
      }
    })
    .catch(console.log)
  }
}

export const signup = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      }
      else {
        dispatch(setCurrentUser(user))
        dispatch(resetSignupForm())
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser()) // optimistic, as soon as you know event is going to be triggered, change the frontend 
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      }
      else {
        dispatch(setCurrentUser(response.data))
        dispatch(getMyDoctors(response.data))
      }
    })
    .catch(console.log)
  }
}