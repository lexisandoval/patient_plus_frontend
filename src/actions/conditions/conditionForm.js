// synchronous
export const updateNewConditionForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_CONDITION_FORM",
    formData
  }
}

export const resetNewConditionForm = () => {
  return {
    type: "RESET_NEW_CONDITION_FORM"
  }
}

export const setConditionFormDataForEdit = condition => {
  const conditionFormData = {
    name: condition.attributes.name
  }

  return {
    type: "SET_CONDITION_FORM_DATA_FOR_EDIT",
    conditionFormData
  }
}