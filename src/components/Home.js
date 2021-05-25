import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Home = () => (
  <Container className="align-middle home">
    <h1><span className="heading">Welcome to PatientPlus</span><span className="black noshadow">+</span></h1><br/>
    <h4>Please <Link className="blue" to="/login">Log In</Link> or <Link className="blue" to="/signup">Sign Up</Link> to continue.</h4>
  </Container>
);

export default Home;