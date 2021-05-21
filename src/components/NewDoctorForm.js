import React from 'react';
import { updateNewDoctorForm } from '../actions/newDoctorForm';
import { connect } from 'react-redux';

const NewDoctorForm = ({name, phone_number, specialty, location, history}) => {
  
  const handleChange = event => {
    const { name, value } = event.target
    updateNewDoctorForm(name, value)
  }

  const handleSubmit = event => event.preventDefault()


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input name="name" onChange={handleChange} value={name} placeholder="Name"/><br/>
        <input name="phone_number" onChange={handleChange} value={phone_number} placeholder="Phone Number"/><br/>
        <input name="specialty" onChange={handleChange} value={specialty} placeholder="Specialty"/><br/>
        <input name="location" onChange={handleChange} value={location} placeholder="Location"/><br/>
        <input type="submit" value="Add Doctor"/>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  const { name, phone_number, specialty, location } = state.newDoctorForm
  return {
    name, 
    phone_number,
    specialty,
    location
  }
}

export default connect(mapStateToProps, { updateNewDoctorForm })(NewDoctorForm);