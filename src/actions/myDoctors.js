// synchronous
export const setMyDoctors = doctors => {
  return {
    type: "SET_MY_DOCTORS",
    doctors
  }
}

export const clearDoctors = () => {
  return {
    type: "CLEAR_DOCTORS"
  }
}

export const addDoctor = doctor => {
  return {
    type: "ADD_DOCTOR",
    doctor
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

export const createDoctor = doctorData => {
  console.log(doctorData)
  return dispatch => {
    const sendableDoctorData = {
      doctor: {
        name: doctorData.name,
        phone_number: doctorData.phone_number,
        specialty: doctorData.specialty,
        location: doctorData.location,
      }
    }
    console.log(sendableDoctorData)

    return fetch("http://localhost:3000/api/v1/doctors", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableDoctorData)
    })
    .then(r => r.json())
    .then(console.log)
  }
}