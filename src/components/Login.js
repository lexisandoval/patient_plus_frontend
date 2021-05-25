import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSumbit = event => {
    event.preventDefault()

    login(loginFormData, history)
  }
  
  return (
    <form onSubmit={handleSumbit}>
      <label>Username<br/>
      <input value={loginFormData.username} name="username" type="text" onChange={handleInputChange}></input></label><br/><br/>
      <label>Password<br/>
      <input value={loginFormData.password} name="password" type="text" onChange={handleInputChange}></input></label><br/><br/>
      <input className="btnAddUpdate" value="Login" type="submit"></input>
    </form>
  )
}

// grab info from redux store to be used as props in this component
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)