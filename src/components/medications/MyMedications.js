import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyMedications = props => {
  const medicationCards = props.medications.map(d => <p key={d.id}><Link className="refLink" to={`/medications/${d.id}`}>{d.attributes.name}</Link></p>)

  return (
    <>
      {medicationCards.length > 0 ? medicationCards : "You have not added any medications yet."}
    </>
  )
}

                        // state of the store
const mapStateToProps = state => {
  return {
    medications: state.myMedications
  }
}

                      // mapStateToProps tells redux what pieces of state are needed
export default connect(mapStateToProps)(MyMedications)