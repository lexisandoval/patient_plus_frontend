import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyConditions = props => {

  const conditionCards = props.conditions.map(c => <p key={c.id} ><Link className="refLink" to={`/conditions/${c.id}`}>{c.attributes.name}</Link></p>)

  return (
    <>
      {conditionCards.length > 0 ? conditionCards : <p>You have not added any conditions yet.</p>}
    </>
  )
}

                        // state of the store
const mapStateToProps = state => {
  return {
    conditions: state.myConditions
  }
}

                      // mapStateToProps tells redux what pieces of state are needed
export default connect(mapStateToProps)(MyConditions)