// synchronous
export const setMyDoctors = doctors => {
  return {
    type: "SET_MY_DOCTORS",
    doctors
  }
}

// asynchronous
export const getMyDoctors = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/doctors", {
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
        dispatch(setMyDoctors(response.data))
      }
    })
    .catch(console.log)
  }
}