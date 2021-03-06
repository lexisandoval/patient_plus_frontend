import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSumbit = event => {
    event.preventDefault()

    signup(signupFormData, history)
  }
  
  return (
    <form onSubmit={handleSumbit}>
      <label>Name<br/>
      <input value={signupFormData.name} name="name" type="text" onChange={handleInputChange}></input></label><br/><br/>
      <label>Username<br/>
      <input value={signupFormData.username} name="username" type="text" onChange={handleInputChange}></input></label><br/><br/>
      <label>Email<br/>
      <input value={signupFormData.email} name="email" type="text" onChange={handleInputChange}></input></label><br/><br/>
      <label>Password<br/>
      <input value={signupFormData.password} name="password" type="text" onChange={handleInputChange}></input></label><br/><br/>
      <input className="btnAddUpdate" value="Sign Up" type="submit"></input>
    </form>
  )
}

// grab info from redux store to be used as props in this component
const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)