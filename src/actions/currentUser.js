// synchronous
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user // same as user: user 
  }
}


// asynchronous
export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3002/api/v1/login", {
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
      }
    })
    .catch(console.log)
  }
}