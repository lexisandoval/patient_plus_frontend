// synchronous
export const updateNewDoctorForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_DOCTOR_FORM",
    formData
  }
}