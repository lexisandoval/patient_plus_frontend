import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
// import MainContainer from './components/MainContainer';
// import Logout from './components/Logout';
import Login from './components/Login';
import Home from './components/Home';
import MyDoctors from './components/MyDoctors';
import Signup from './components/Signup';
import NewDoctorForm from './components/NewDoctorForm';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <div className="App"> 
          { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/doctors' component={MyDoctors}/>
            <Route exact path='/doctors/new' component={NewDoctorForm}/>
          </Switch>
        </div>
      </Router>
    );
  }
} 

const mapStateToProps = state => {
  return({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
