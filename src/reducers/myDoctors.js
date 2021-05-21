const exp = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DOCTORS":
      return action.doctors
    case "CLEAR_DOCTORS":
      return []
    default:
      return state
  }
}

export default exp