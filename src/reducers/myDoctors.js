const exp = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DOCTORS":
      return action.doctors
    case "CLEAR_DOCTORS":
      return []
    case "ADD_DOCTOR":
      return state.concat(action.doctor)
    case "UPDATE_DOCTOR":
      return state.map(doctor => doctor.id === action.doctor.id ? action.doctor : doctor)
    default:
      return state
  }
}

export default exp