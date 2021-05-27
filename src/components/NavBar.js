import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// By desctructuring, you get props and dont explicitly need to say props.whatever
// Default argument would be (props), then you'd use props.currentUser below
const NavBar = ({ currentUser }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <NavLink className="mr-auto nav navLink" to="/dashboard"><span>PatientPlus</span><span className="black plus">+</span></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink exact className="navLink" to="/doctors">My Doctors</NavLink>
          <NavLink exact className="navLink" to="/conditions">My Conditions</NavLink>
          <NavLink exact className="navLink" to="/medications">My Medications</NavLink>
        </Nav>
        { currentUser ? <Logout/> : null }
      </Navbar.Collapse>
    </Navbar>
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