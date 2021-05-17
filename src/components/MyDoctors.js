import React from 'react'
import { connect } from 'react-redux'
import DoctorCard from './DoctorCard'

const MyDoctors = props => {
  const doctorCards = props.doctors.map(d => <DoctorCard doctor={d} key={d.id}/>)
  return (
    doctorCards.length > 0 ? doctorCards : null
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