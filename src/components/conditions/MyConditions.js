import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const MyConditions = props => {

  const conditionCards = props.conditions.map(c => <p key={c.id} ><Link className="refLink" to={`/conditions/${c.id}`}>{c.attributes.name}</Link></p>)

  return (
    <div className="space">
      <h1 className="heading">Conditions</h1>
      <br/>
      <Link to="/doctors/new"><Button className="btnAdd">Add A Doctor</Button></Link>
      <br/><br/>
      {conditionCards.length > 0 ? conditionCards : <p>You have not added any conditions yet.</p>}
    </div>
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