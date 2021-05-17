import React from 'react'

const DoctorCard = ({ doctor }) => {
  return (
    <div>
      <h2>{ doctor.attributes.name }</h2>
      <p>{ doctor.attributes.specialty }</p>
      <p>{ doctor.attributes.location } - { doctor.attributes.phone_number }</p>
    </div>
  )
}

export default DoctorCard