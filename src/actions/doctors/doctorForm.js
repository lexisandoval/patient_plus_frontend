// synchronous
export const updateNewDoctorForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_DOCTOR_FORM",
    formData
  }
}

export const resetNewDoctorForm = () => {
  return {
    type: "RESET_NEW_DOCTOR_FORM"
  }
}

export const setFormDataForEdit = doctor => {
  const doctorFormData = {
    name: doctor.attributes.name,
    phone_number: doctor.attributes.phone_number,
    specialty: doctor.attributes.specialty,
    location: doctor.attributes.location
  }

  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    doctorFormData
  }
}