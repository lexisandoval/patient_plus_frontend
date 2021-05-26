import React from 'react';
import MedicationForm from './MedicationForm';
import { updateMedication, deleteMedication } from '../../actions/medications/myMedications';
import { setMedicationFormDataForEdit, resetNewMedicationForm } from '../../actions/medications/medicationForm'

import { connect } from 'react-redux';

class EditMedicationFormWrapper extends React.Component {

  componentDidMount() {
    this.props.medication && this.props.setMedicationFormDataForEdit(this.props.medication)
  }

  componentDidUpdate(prevProps) {
    this.props.medication && !prevProps.medication && this.props.setMedicationFormDataForEdit(this.props.medication)
  }

  componentWillUnmount() {
    this.props.resetNewMedicationForm()
  }

  handleSubmit = (formData) => {
    const { updateMedication, medication, history } = this.props
    updateMedication({
      ...formData, 
      medicationId: medication.id
    }, history)
  }

  render() {
    const { history, medication, deleteMedication } = this.props
    const medicationId = medication ? medication.id : null
    return <>
            <MedicationForm editMode handleSubmit={this.handleSubmit}/><br/>
            <button style={{color: "red", backgroundColor: "white"}} onClick={() => deleteMedication(medicationId, history)}>Delete</button>
          </>
  }
};

export default connect(null, { updateMedication, setMedicationFormDataForEdit, resetNewMedicationForm, deleteMedication })(EditMedicationFormWrapper);