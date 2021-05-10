import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

// By desctructuring, you get props and dont explicitly need to say props.whatever
// Default argument would be (props), then you'd use props.currentUser below
const NavBar = ({ currentUser }) => {
  return (
    <div className="nav">
      { currentUser ? <p>Welcome, {currentUser.name}!</p> : "" }
      { currentUser ? <Logout/> : <Login/> }
    </div>
  )
}

// Loads current user state under props (logged in vs logged out)
// Can use deconstruction below because I know the incoming argument in an object (state) coming from redux and I know it has a property called currentUser
// i.e. state = { ..., 
//                currentUser: { ... }
//              }
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar);