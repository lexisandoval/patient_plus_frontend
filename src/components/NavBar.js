import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

// By desctructuring, you get props and dont explicitly need to say props.whatever
// Default argument would be (props), then you'd use props.currentUser below
const NavBar = ({ currentUser }) => {
  return (
    <div>
      <div className="nav">
        {/* <div>{ currentUser ? <p>Welcome, {currentUser.attributes.name}!</p> : "" }</div> */}
        <NavLink exact activeClassName="active" to="/doctors">My Doctors  |  </NavLink>
        <NavLink exact activeClassName="active" to="/doctors/new">  Add A Doctor  |  </NavLink>
        { currentUser ? <Logout/> : null }
      </div>
    </div>
  )
}

// Loads current user state under props (logged in vs logged out)
// Can use deconstruction below because I know the incoming argument is an object (state) coming from redux and I know it has a property called currentUser
// i.e. state = { ..., 
//                currentUser: { ... }
//              }
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar);