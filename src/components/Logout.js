import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import { withRouter } from 'react-router-dom';

      // a.k.a. props.logout
const Logout = ({ logout, history }) => {
  
  return (
    <form onSubmit={ (event) => {
      event.preventDefault()
      logout()
      history.push('/')
    }}>
      <input value="Log Out" type="submit"></input>
    </form>
  )
}

// no state needed, only the action
export default withRouter(connect(null, { logout })(Logout))
