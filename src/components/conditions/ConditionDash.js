import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import MyConditions from './MyConditions'

const ConditionDash = () => {

  return (
    <div className="space">
      <h1 className="heading">Conditions</h1>
      <br/>
      <Link to="/conditions/new"><Button className="btnAdd">Add Condition</Button></Link>
      <br/>
      <MyConditions/>
    </div>
  )
}

export default ConditionDash