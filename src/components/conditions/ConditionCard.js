import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const ConditionCard = ({ condition }) => {  

  return (
    condition ?
    <Container className="space">
      <h1 className="heading">Condition</h1>
      <h2>{ condition.attributes.name }</h2>
      <br/>
      <Link className="blue" to={`/conditions/${condition.id}/edit`}>Edit Condition Name</Link>
    </Container> : null
  ) 
}

export default ConditionCard