import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const MedicationCard = ({ medication }) => {
  return (
    medication ?
    <Container className="space">
      <h1 className="heading">Medication</h1> 
      <h2>{ medication.attributes.name }</h2>
      <p className="space">Prescription: { medication.attributes.prescription }</p>
      <p className="space"><Link className="smallLink" to={`/conditions/${medication.attributes.condition.id}`}>Prescribed for: { medication.attributes.condition.name }</Link></p>
      <p className="space"><Link className="smallLink" to={`/doctors/${medication.attributes.doctor.id}`}>Prescribed by: { medication.attributes.doctor.name }</Link></p>
      <br/>
      <Link className="blue" to={`/medications/${medication.id}/edit`}>Edit Medication Information</Link>
    </Container> : null
  ) 
}

export default MedicationCard