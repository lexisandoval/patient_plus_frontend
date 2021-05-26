import React from 'react';
import MedicationForm from './MedicationForm';
import { createMedication } from '../../actions/medications/myMedications';
import { connect } from 'react-redux';

const NewMedicationFormWrapper = ({ history, createMedication }) => {

  const handleSubmit = (formData, userId) => {
    createMedication({
      ...formData,
      userId
    }, history)
  }
  return <MedicationForm history={history} handleSubmit={handleSubmit}/>
};

export default connect(null, { createMedication })(NewMedicationFormWrapper);