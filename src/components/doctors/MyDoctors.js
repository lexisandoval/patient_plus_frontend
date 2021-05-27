import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const MyDoctors = props => {
  const doctorCards = props.doctors.map(d => <p key={d.id}><Link className="refLink" to={`/doctors/${d.id}`}>{d.attributes.name}</Link></p>)

  return (
    <div className="space">
      <h1 className="heading">Doctors</h1>
      <br/>
      <Link to="/doctors/new"><Button className="btnAdd">Add A Doctor</Button></Link>
      <br/><br/>
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