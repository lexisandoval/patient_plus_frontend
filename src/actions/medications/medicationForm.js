// synchronous
export const updateNewMedicationForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_MEDICATION_FORM",
    formData
  }
}

export const resetNewMedicationForm = () => {
  return {
    type: "RESET_NEW_MEDICATION_FORM"
  }
}

export const setMedicationFormDataForEdit = medication => {
  const medicationFormData = {
    name: medication.attributes.name,
    prescription: medication.attributes.prescription,
  }

  return {
    type: "SET_MEDICATION_FORM_DATA_FOR_EDIT",
    medicationFormData
  }
}