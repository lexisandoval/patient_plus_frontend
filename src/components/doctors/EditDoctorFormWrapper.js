import React from 'react';
import DoctorForm from './DoctorForm';
import { updateDoctor, deleteDoctor } from '../../actions/doctors/myDoctors';
import { setDoctorFormDataForEdit, resetNewDoctorForm } from '../../actions/doctors/doctorForm'

import { connect } from 'react-redux';

class EditDoctorFormWrapper extends React.Component {

  componentDidMount() {
    this.props.doctor && this.props.setDoctorFormDataForEdit(this.props.doctor)
  }

  componentDidUpdate(prevProps) {
    this.props.doctor && !prevProps.doctor && this.props.setDoctorFormDataForEdit(this.props.doctor)
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
            <button style={{color: "red", backgroundColor: "white"}} onClick={() => deleteDoctor(doctorId, history)}>Delete</button>
          </>
  }
};

export default connect(null, { updateDoctor, setDoctorFormDataForEdit, resetNewDoctorForm, deleteDoctor })(EditDoctorFormWrapper);