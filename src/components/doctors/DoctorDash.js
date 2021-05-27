import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import MyDoctors from './MyDoctors'

const DoctorDash = () => {

  return (
    <div className="space">
      <h1 className="heading">Doctors</h1>
      <br/>
      <Link to="/doctors/new"><Button className="btnAdd">Add Doctor</Button></Link>
      <br/>
      <MyDoctors/>
    </div>
  )
}

export default DoctorDash