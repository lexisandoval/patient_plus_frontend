import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyDoctors = props => {
  // const doctorCards = props.doctors.map(d => <DoctorCard doctor={d} key={d.id}/>)
  const doctorCards = props.doctors.map(d => <p key={d.id}><Link to={`/doctors/${d.id}`}>{d.attributes.name}</Link></p>)

  return (
    <div>
      <h1>Doctors</h1>
    {doctorCards.length > 0 ? doctorCards : "You have not added any doctors yet."}
    </div>
  )
}

                        // state of the store
const mapStateToProps = state => {
  return {
    doctors: state.myDoctors
  }
}

                      // mapStateToProps tells redux what pieces of state are needed
export default connect(mapStateToProps)(MyDoctors)