import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import MyMedications from './MyMedications'

const MedicationDash = () => {

  return (
    <div className="space">
      <h1 className="heading">Medications</h1>
      <br/>
      <Link to="/medications/new"><Button className="btnAdd">Add Medication</Button></Link>
      <br/>
      <MyMedications/>
    </div>
  )
}

export default MedicationDash