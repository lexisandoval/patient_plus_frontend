import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

import DoctorDash from './components/doctors/DoctorDash';
import DoctorCard from './components/doctors/DoctorCard';
import NewDoctorFormWrapper from './components/doctors/NewDoctorFormWrapper';
import EditDoctorFormWrapper from './components/doctors/EditDoctorFormWrapper';

import MedicationDash from './components/medications/MedicationDash';
import MedicationCard from './components/medications/MedicationCard';
import NewMedicationFormWrapper from './components/medications/NewMedicationFormWrapper';
import EditMedicationFormWrapper from './components/medications/EditMedicationFormWrapper';

import ConditionDash from './components/conditions/ConditionDash';
import ConditionCard from './components/conditions/ConditionCard';
import NewConditionFormWrapper from './components/conditions/NewConditionFormWrapper';
import EditConditionFormWrapper from './components/conditions/EditConditionFormWrapper';

import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, myDoctors, myConditions, myMedications } = this.props
    return (
      <Router>
        <div className="App"> 
          { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/dashboard' component={Dashboard}/>

            <Route exact path='/doctors' component={DoctorDash}/>
            <Route exact path='/doctors/new' component={NewDoctorFormWrapper}/>
            <Route exact path='/doctors/:id' render={props => {
              const doctor = myDoctors.find(doctor => doctor.id === props.match.params.id)
              return <DoctorCard doctor={doctor} {...props} />
            }}/>
            <Route exact path='/doctors/:id/edit' render={props => {
              const doctor = myDoctors.find(doctor => doctor.id === props.match.params.id)
              return <EditDoctorFormWrapper doctor={doctor} {...props} />
            }}/>

            <Route exact path='/medications' component={MedicationDash}/>

            <Route exact path='/medications/new' component={NewMedicationFormWrapper}/>
            <Route exact path='/medications/:id' render={props => {
              const medication = myMedications.find(medication => medication.id === props.match.params.id)
              return <MedicationCard medication={medication} {...props} />
            }}/>
            <Route exact path='/medications/:id/edit' render={props => {
              const medication = myMedications.find(medication => medication.id === props.match.params.id)
              return <EditMedicationFormWrapper medication={medication} {...props} />
            }}/> 

            <Route exact path='/conditions' component={ConditionDash}/>
            <Route exact path='/conditions/new' component={NewConditionFormWrapper}/>
            <Route exact path='/conditions/:id' render={props => {
              const condition = myConditions.find(condition => condition.id === props.match.params.id)
              return <ConditionCard condition={condition} {...props} />
            }}/>
            <Route exact path='/conditions/:id/edit' render={props => {
              const condition = myConditions.find(condition => condition.id === props.match.params.id)
              return <EditConditionFormWrapper condition={condition} {...props} />
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
    myDoctors: state.myDoctors,
    myMedications: state.myMedications,
    myConditions: state.myConditions
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
