import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import Logout from './components/Logout';
import MyDoctors from './components/MyDoctors';
import Signup from './components/Signup';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Router>
        <div className="App"> 
          <NavBar/>
          {/* <MainContainer/> */}
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>

          {/* <Route exact path='/logout' component={Logout}/> */}
          <Route exact path='/my-doctors' component={MyDoctors}/>
        </div>
      </Router>
    );
  }
} 

export default connect(null, { getCurrentUser })(App);
