const exp = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_MEDICATIONS":
      return action.medications
    case "CLEAR_MEDICATIONS":
      return []
    case "ADD_MEDICATION":
      return state.concat(action.medication)
    case "UPDATE_MEDICATION":
      return state.map(medication => medication.id === action.medication.id ? action.medication : medication)
    case "DELETE_MEDICATION":
      return state.filter(medication => medication.id === action.medicationId ? false : true)    
    default:
      return state
  }
}

export default exp