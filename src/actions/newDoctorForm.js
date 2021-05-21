// synchronous
export const updateNewDoctorForm = (name, value) => {
  return {
    type: "UPDATE_NEW_DOCTOR_FORM",
    formData: { name, value }
  }
}