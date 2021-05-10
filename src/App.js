import React from 'react'
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      this.props.currentUser ? <Logout/> : <Login/>
    );
  }
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

export default connect(mapStateToProps, { getCurrentUser })(App);
