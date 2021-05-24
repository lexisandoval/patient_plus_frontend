import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
// import Logout from './components/Logout';
import Login from './components/Login';
import Home from './components/Home';
import MyDoctors from './components/MyDoctors';
import Signup from './components/Signup';
import DoctorCard from './components/DoctorCard';
import NewDoctorFormWrapper from './components/NewDoctorFormWrapper';
import EditDoctorFormWrapper from './components/EditDoctorFormWrapper';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import MainContainer from './components/MainContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, myDoctors } = this.props
    return (
      <Router>
        <div className="App"> 
          { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
          {/* { loggedIn ? <><NavBar location={this.props.location}/><MainContainer/><br/></> : <Home/> } */}
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/doctors' component={MyDoctors}/>
            <Route exact path='/doctors/new' component={NewDoctorFormWrapper}/>
            <Route exact path='/doctors/:id' render={props => {
              const doctor = myDoctors.find(doctor => doctor.id === props.match.params.id)
              return <DoctorCard doctor={doctor} {...props} />
            }}/>
            <Route exact path='/doctors/:id/edit' render={props => {
              const doctor = myDoctors.find(doctor => doctor.id === props.match.params.id)
              return <EditDoctorFormWrapper doctor={doctor} {...props} />
            }}/>
          </Switch>
        </div>
      </Router>
    );
  }
} 

const mapStateToProps = state => {
  return({
    loggedIn: !!state.currentUser,
    myDoctors: state.myDoctors
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
