import React from 'react';
import DoctorForm from './DoctorForm';
import { createDoctor } from '../../actions/doctors/myDoctors';
import { connect } from 'react-redux';

const NewDoctorFormWrapper = ({ history, createDoctor }) => {

  const handleSubmit = (formData) => {
    createDoctor({
      ...formData, 
    }, history)
  }
  return <DoctorForm history={history} handleSubmit={handleSubmit}/>
};

export default connect(null, { createDoctor })(NewDoctorFormWrapper);