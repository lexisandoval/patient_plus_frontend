const exp = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_DOCTORS":
      return action.doctors
    default:
      return state
  }
}

export default exp