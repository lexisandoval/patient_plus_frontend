import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

// By desctructuring, you get props and dont explicitly need to say props.whatever
// Default argument would be (props), then you'd use props.currentUser below
const NavBar = ({ currentUser }) => {
  return (
    <div>
      <div className="nav">
        <div>{ currentUser ? <p>Welcome, {currentUser.attributes.name}!</p> : "" }</div>
        { currentUser ? <Logout/> : <Login/> }
      </div>
      {/*   <div>{ currentUser ? <p>Doctors: {currentUser.attributes.doctors.name}!</p> : "" }</div> */}
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