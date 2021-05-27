import React from 'react';
// 1. Grab action creator (function that produces an action aka a POJO)
import { updateNewMedicationForm } from '../../actions/medications/medicationForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// 3. Now redux gives a prop called updateNewTripForm which redux will dispatch when invoked
const MedicationForm = ({ formData, updateNewMedicationForm, handleSubmit, editMode,  myConditions, myDoctors }) => {
  
  const handleChange = event => {
    const { name, value } = event.target
    // 4. Line below is not an invocation of the action creator, rather
    //    it gives the action to redux and redux invokes and distpatches it (invokes the reducer).
    //    If a match is hit in the switch statement (in reducer), then store is changed and react re-renders
    updateNewMedicationForm(name, value)
  }

  const { name, prescription, doctor, condition } = formData

  const conditions = myConditions.map(c => <option key={c.id} value={c.id}>{c.attributes.name}</option>)

  const doctors = myDoctors.map(d => <option key={d.id} value={d.id}>{d.attributes.name}</option>)

  return (
    <div className="space below">
      <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
        {editMode ? <h1 className="heading">Edit Medication</h1> : <h1 className="heading">Add a Medication</h1>}

        <p>If you don't see your doctor or condition below, you may</p>
        <span>
          <Link to="/doctors/new" className="blue"> add a doctor here </Link>or
          <Link to="/conditions/new" className="blue"> add a condition here</Link>.
        </span>
        <br/><br/>

        <label>Name:<br/>
        <input name="name" onChange={handleChange} value={name}/></label><br/><br/>

        <label>Prescription (mg, mcg, or ml):<br/>
        <input name="prescription" onChange={handleChange} value={prescription}/></label><br/><br/>

        <label>Condition:<br/>
        <select name="condition" onChange={handleChange} value={condition}>
          <option value=""></option>
          { conditions }
        </select></label><br/><br/>

        <label>Doctor:<br/>
        <select name="doctor" onChange={handleChange} value={doctor}>
          <option value=""></option>
          { doctors }
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
    myDoctors: state.myDoctors,
    myConditions: state.myConditions,
    userId
  }
}

// 2. Pass the action creator to redux's connect function using mapDispatchToProps or shorthand (seen below)
export default connect(mapStateToProps, { updateNewMedicationForm })(MedicationForm);