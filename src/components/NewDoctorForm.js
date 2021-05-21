import React from 'react';
// 1. Grab action creator (function that produces an action aka a POJO)
import { updateNewDoctorForm } from '../actions/newDoctorForm';
import { createDoctor } from '../actions/myDoctors';
import { connect } from 'react-redux';

// 3. Now redux gives a prop called updateNewTripForm which redux will dispatch when invoked
const NewDoctorForm = ({ formData, history, updateNewDoctorForm, createDoctor }) => {
  
  const { name, phone_number, specialty, location } = formData

  const handleChange = event => {
    const { name, value } = event.target
    // 4. Line below is not an invocation of the action creator, rather
    //    it gives the action to redux and redux invokes and distpatches it (invokes the reducer).
    //    If a match is hit in the switch statement (in reducer), then store is changed and react re-renders
    updateNewDoctorForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createDoctor({...formData})
  }


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
  return {
    formData: state.newDoctorForm
  }
}

// 2. Pass the action creator to redux's connect function using mapDispatchToProps or shorthand (seen below)
export default connect(mapStateToProps, { updateNewDoctorForm, createDoctor })(NewDoctorForm);