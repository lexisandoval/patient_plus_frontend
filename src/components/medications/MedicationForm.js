import React from 'react';
// 1. Grab action creator (function that produces an action aka a POJO)
import { updateNewMedicationForm } from '../../actions/medications/medicationForm';
import { connect } from 'react-redux';

// 3. Now redux gives a prop called updateNewTripForm which redux will dispatch when invoked
const MedicationForm = ({ formData, updateNewMedicationForm, handleSubmit, editMode, medication, userId }) => {
  
  const { name, prescription, doctor, condition } = formData

  const handleChange = event => {
    const { name, value } = event.target
    // 4. Line below is not an invocation of the action creator, rather
    //    it gives the action to redux and redux invokes and distpatches it (invokes the reducer).
    //    If a match is hit in the switch statement (in reducer), then store is changed and react re-renders
    updateNewMedicationForm(name, value)
  }

  return (
    <div className="space">
      <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
        {editMode ? <h1 className="heading">Edit Medication</h1> : <h1 className="heading">Add a Medication</h1>}
        <br/>
        <label>Name:<br/>
        <input name="name" onChange={handleChange} value={name}/></label><br/><br/>
        <label>Prescription (mg, mcg, or ml):<br/>
        <input name="prescription" onChange={handleChange} value={prescription}/></label><br/><br/>
        <label>Condition:<br/>
        <select name="condition" value={condition}>
         {/* mirror collection select */}
        </select></label><br/><br/>
        <label>Doctor:<br/>
        <select name="doctor" value={doctor}>
          
        </select></label><br/><br/>
        <input className="btnAddUpdate" type="submit" value={ editMode ? "Update" : "Add Medication" }/>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""

  return {
    formData: state.medicationForm,
    userId
  }
}

// 2. Pass the action creator to redux's connect function using mapDispatchToProps or shorthand (seen below)
export default connect(mapStateToProps, { updateNewMedicationForm })(MedicationForm);