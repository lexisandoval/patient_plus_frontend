import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';

const Logout = ({ logout }) => {
  
  return (
    <form onSubmit={ logout }>
      <input value="Log Out" type="submit"></input>
    </form>
  )
}

export default connect(null, { logout })(Logout)