const initialState = {
  name: ""
}

const exp = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_CONDITION_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_CONDITION_FORM":
      return initialState
    case "SET_CONDITION_FORM_DATA_FOR_EDIT":
      return action.conditionFormData
    default:
      return state
  }
}

export default exp