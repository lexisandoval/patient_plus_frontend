import React from 'react'
import { Link } from 'react-router-dom'

const ConditionCard = ({ condition }) => {  

  return (
    condition ?
    <div className="space">
      <h1 className="heading">Condition</h1>
      <h2>{ condition.attributes.name }</h2>
      <br/>
      <Link className="blue" to={`/conditions/${condition.id}/edit`}>Edit Condition Name</Link>
    </div> : null
  ) 
}

export default ConditionCard