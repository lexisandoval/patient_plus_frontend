import { resetNewConditionForm } from './conditionForm'

// synchronous
export const setMyConditions = conditions => {
  return {
    type: "SET_MY_CONDITIONS",
    conditions
  }
}

export const clearConditions = () => {
  return {
    type: "CLEAR_CONDITIONS"
  }
}

export const addCondition = condition => {
  return {
    type: "ADD_CONDITION",
    condition
  }
}

export const updateConditionSuccess = condition => {
  return {
    type: "UPDATE_CONDITION",
    condition
  }
}

export const deleteConditionSuccess = conditionId => {
  return {
    type: "DELETE_CONDITION",
    conditionId
  }
}

// asynchronous
export const getMyConditions = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/conditions", {
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
        dispatch(setMyConditions(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createCondition= (conditionData, history) => {
  return dispatch => {
    const sendableConditionData = {
        name: conditionData.name,
        user_id: conditionData.userId
    }
    return fetch("http://localhost:3000/api/v1/conditions", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableConditionData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } 
      else {
        dispatch(addCondition(resp.data))
        dispatch(resetNewConditionForm())
        history.push(`/conditions/${resp.data.id}`)
      }
    })
  }
}

export const updateCondition = (conditionData, history) => {
  return dispatch => {
    const sendableConditionData = {
      name: conditionData.name,
    }
    return fetch(`http://localhost:3000/api/v1/conditions/${conditionData.conditionId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableConditionData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } 
      else {
        dispatch(updateConditionSuccess(resp.data))
        history.push(`/conditions/${resp.data.id}`)
      }
    })
  }
}

export const deleteCondition = (conditionId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/conditions/${conditionId}`, {
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
          dispatch(deleteConditionSuccess(conditionId))
          history.push(`/conditions`)
        }
      })
      .catch(console.log)
  }
}