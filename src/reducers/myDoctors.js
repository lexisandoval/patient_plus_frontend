const exp = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DOCTORS":
      return action.doctors
    case "CLEAR_DOCTORS":
      return []
    case "ADD_DOCTOR":
      return state.doctors.concat(action.doctors)
    default:
      return state
  }
}

export default exp