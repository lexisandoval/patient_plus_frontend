import React from 'react';
// 1. Grab action creator (function that produces an action aka a POJO)
import { updateNewDoctorForm } from '../../actions/doctors/doctorForm';
import { connect } from 'react-redux';

// 3. Now redux gives a prop called updateNewTripForm which redux will dispatch when invoked
const DoctorForm = ({ formData, updateNewDoctorForm, handleSubmit, editMode, doctor }) => {
  
  const { name, phone_number, specialty, location } = formData

  const handleChange = event => {
    const { name, value } = event.target
    // 4. Line below is not an invocation of the action creator, rather
    //    it gives the action to redux and redux invokes and distpatches it (invokes the reducer).
    //    If a match is hit in the switch statement (in reducer), then store is changed and react re-renders
    updateNewDoctorForm(name, value)
  }

  return (
    <div className="space">
      <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
        {editMode ? <h1 className="heading">Edit Doctor</h1> : <h1 className="heading">Add a Doctor</h1>}
        <br/>
        <label>Name:<br/>
        <input name="name" onChange={handleChange} value={name}/></label><br/><br/>
        <label>Phone Number:<br/>
        <input name="phone_number" onChange={handleChange} value={phone_number}/></label><br/><br/>
        <label>Specialty:<br/>
        <input name="specialty" onChange={handleChange} value={specialty}/></label><br/><br/>
        <label>Location:<br/>
        <input name="location" onChange={handleChange} value={location}/></label><br/><br/>
        <input className="btnAddUpdate" type="submit" value={ editMode ? "Update" : "Add Doctor" }/>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    formData: state.doctorForm
  }
}

// 2. Pass the action creator to redux's connect function using mapDispatchToProps or shorthand (seen below)
export default connect(mapStateToProps, { updateNewDoctorForm })(DoctorForm);