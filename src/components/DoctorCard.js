import React from 'react'
import { Link } from 'react-router-dom'

const DoctorCard = ({ doctor }) => {
  return (
    doctor ?
    <div>
      <h2>{ doctor.attributes.name }</h2>
      <p>Specialty: { doctor.attributes.specialty }</p>
      <p>Location: { doctor.attributes.location }</p>
      <p>Phone Number: { doctor.attributes.phone_number }</p>
      <br/>
      <Link to={`/doctors/${doctor.id}/edit`}>Edit Doctor Information</Link>
    </div> : null
  ) 
}

export default DoctorCard