import { resetNewMedicationForm } from './medicationForm'

// synchronous
export const setMyMedications = medications => {
  return {
    type: "SET_MY_MEDICATIONS",
    medications
  }
}

export const clearMedications = () => {
  return {
    type: "CLEAR_MEDICATIONS"
  }
}

export const addMedication = medication => {
  return {
    type: "ADD_MEDICATION",
    medication
  }
}

export const updateMedicationSuccess = medication => {
  return {
    type: "UPDATE_MEDICATION",
    medication
  }
}

export const deleteMedicationSuccess = medicationId => {
  return {
    type: "DELETE_MEDICATION",
    medicationId
  }
}

// asynchronous
export const getMyMedications = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/medications", {
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
        dispatch(setMyMedications(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createMedication = (medicationData, history) => {
  return dispatch => {
    const sendableMedicationData = {
        name: medicationData.name,
        prescription: medicationData.prescription,
        user_id: medicationData.userId
    }
    return fetch("http://localhost:3000/api/v1/medications", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableMedicationData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } 
      else {
        dispatch(addMedication(resp.data))
        dispatch(resetNewMedicationForm())
        history.push(`/medications/${resp.data.id}`)
      }
    })
  }
}

export const updateMedication = (medicationData, history) => {
  return dispatch => {
    const sendableMedicationData = {
      name: medicationData.name,
      prescription: medicationData.prescription
    }
    return fetch(`http://localhost:3000/api/v1/medications/${medicationData.medicationId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableMedicationData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } 
      else {
        dispatch(updateMedicationSuccess(resp.data))
        history.push(`/medications/${resp.data.id}`)
      }
    })
  }
}

export const deleteMedication = (medicationId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/medications/${medicationId}`, {
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
          dispatch(deleteMedicationSuccess(medicationId))
          history.push(`/medications`)
        }
      })
      .catch(console.log)
  }
}
