const initialState = {
  name: "",
  prescription: "",
}

const exp = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_MEDICATION_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_MEDICATION_FORM":
      return initialState
    case "SET_MEDICATION_FORM_DATA_FOR_EDIT":
      return action.medicationFormData
    default:
      return state
  }
}

export default exp