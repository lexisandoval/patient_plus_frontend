import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
// import { signup } from '../actions/currentUser';

const Signup = ({ signupFormData, updateSignupForm, signup }) => {
  
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

    signup(signupFormData)
  }
  
  return (
    <form onSubmit={handleSumbit}>
      <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputChange}></input>
      <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange}></input>
      <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleInputChange}></input>
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange}></input>
      <input value="Sign Up" type="submit"></input>
    </form>
  )
}

// grab info from redux store to be used as props in this component
const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

// export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
export default connect(mapStateToProps, { updateSignupForm })(Signup)