import React from 'react';
import DoctorForm from './DoctorForm';
import { updateDoctor, deleteDoctor } from '../../actions/doctors/myDoctors';
import { setFormDataForEdit, resetNewDoctorForm } from '../../actions/doctors/doctorForm'

import { connect } from 'react-redux';

class EditDoctorFormWrapper extends React.Component {

  componentDidMount() {
    this.props.doctor && this.props.setFormDataForEdit(this.props.doctor)
  }

  componentDidUpdate(prevProps) {
    this.props.doctor && !prevProps.doctor && this.props.setFormDataForEdit(this.props.doctor)
  }

  componentWillUnmount() {
    this.props.resetNewDoctorForm()
  }

  handleSubmit = (formData) => {
    const { updateDoctor, doctor, history } = this.props
    updateDoctor({
      ...formData, 
      doctorId: doctor.id
    }, history)
  }

  render() {
    const { history, doctor, deleteDoctor } = this.props
    const doctorId = doctor ? doctor.id : null
    return <>
            <DoctorForm editMode handleSubmit={this.handleSubmit}/><br/>
            <button style={{color: "red"}} onClick={() => deleteDoctor(doctorId, history)}>Delete</button>
          </>
  }
};

export default connect(null, { updateDoctor, setFormDataForEdit, resetNewDoctorForm, deleteDoctor })(EditDoctorFormWrapper);