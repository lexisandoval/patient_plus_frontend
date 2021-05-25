import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

      // a.k.a. props.logout
const Logout = ({ logout, history }) => {
  
  return (
    <Button className="btn" onClick={ (event) => {
      event.preventDefault()
      logout()
      history.push('/')
    }}>
      Log Out
    </Button>
  )
}

// no state needed, only the action
export default withRouter(connect(null, { logout })(Logout))
