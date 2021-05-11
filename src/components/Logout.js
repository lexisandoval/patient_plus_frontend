import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';

      // a.k.a. props.logout
const Logout = ({ logout }) => {
  
  return (
    <form onSubmit={ logout }>
      <input value="Log Out" type="submit"></input>
    </form>
  )
}

// no state needed, only the action
export default connect(null, { logout })(Logout)
