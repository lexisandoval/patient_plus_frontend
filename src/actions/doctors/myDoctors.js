import { resetNewDoctorForm } from './doctorForm'

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

export const updateDoctorSuccess = doctor => {
  return {
    type: "UPDATE_DOCTOR",
    doctor
  }
}

export const deleteDoctorSuccess = doctorId => {
  return {
    type: "DELETE_DOCTOR",
    doctorId
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

export const createDoctor = (doctorData, history) => {
  return dispatch => {
    const sendableDoctorData = {
        name: doctorData.name,
        phone_number: doctorData.phone_number,
        specialty: doctorData.specialty,
        location: doctorData.location
    }
    return fetch("http://localhost:3000/api/v1/doctors", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableDoctorData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } 
      else {
        dispatch(addDoctor(resp.data))
        dispatch(resetNewDoctorForm())
        history.push(`/doctors/${resp.data.id}`)
      }
    })
  }
}

export const updateDoctor = (doctorData, history) => {
  return dispatch => {
    const sendableDoctorData = {
      name: doctorData.name,
      phone_number: doctorData.phone_number,
      specialty: doctorData.specialty,
      location: doctorData.location
    }
    return fetch(`http://localhost:3000/api/v1/doctors/${doctorData.doctorId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableDoctorData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } 
      else {
        dispatch(updateDoctorSuccess(resp.data))
        history.push(`/doctors/${resp.data.id}`)
      }
    })
  }
}

export const deleteDoctor = (doctorId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/doctors/${doctorId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteDoctorSuccess(doctorId))
          history.push(`/doctors`)
        }
      })
      .catch(console.log)
  }
}
