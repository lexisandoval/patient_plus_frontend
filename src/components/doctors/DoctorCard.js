import React from 'react'
import { Link } from 'react-router-dom'

const DoctorCard = ({ doctor }) => {
  return (
    doctor ?
    <div className="space">
      <h1 className="heading">Doctor</h1> 
      <h2>{ doctor.attributes.name }</h2>
      <p className="space">Specialty: { doctor.attributes.specialty }</p>
      <p>Location: { doctor.attributes.location }</p>
      <p>Phone Number: { doctor.attributes.phone_number }</p>
      <br/>
      <Link className="blue" to={`/doctors/${doctor.id}/edit`}>Edit Doctor Information</Link>
    </div> : null
  ) 
}

export default DoctorCard