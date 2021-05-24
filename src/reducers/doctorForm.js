const initialState = {
  name: "",
  phone_number: "",
  specialty: "",
  location: ""
}

const exp = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_DOCTOR_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_DOCTOR_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.doctorFormData
    default:
      return state
  }
}

export default exp