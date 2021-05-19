import React from 'react';
// import Login from './Login';
// import Signup from './Signup';
import { Link } from 'react-router-dom'

const Home = ({}) => (
  <div>
    <h1>Welcome to PatientPlus!</h1>
    <h4>Please <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> to continue.</h4>
  </div>
);

export default Home;