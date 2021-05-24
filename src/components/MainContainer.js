import React from 'react';
import { connect } from 'react-redux';

const MainContainer = ({ currentUser }) => {
  return (
    currentUser ? 
    <div className="mainContainer">
      <h1>Welcome back, {currentUser.attributes.name}!</h1>
    </div> : null
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer);