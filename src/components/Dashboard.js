import React from 'react';
import MyConditions from '../components/conditions/MyConditions';
import MyDoctors from '../components/doctors/MyDoctors';
import MyMedications from '../components/medications/MyMedications';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <div className="space">
    <h1 style={{fontWeight:600}}>Welcome back!</h1>
    <h2 className="subhead">Here's a preview of your medical information:</h2>
    <Container>
      <Row>
        <Col>
          <Link to="/doctors" className="nounderline"><h1 className="heading">Doctors</h1></Link>
          <br/>
          <MyDoctors/>
        </Col>
        <Col>
          <Link to="/conditions" className="nounderline"><h1 className="heading">Conditions</h1></Link>
          <br/>
          <MyConditions/>
        </Col>
        <Col>
          <Link to="/medications" className="nounderline"><h1 className="heading">Medications</h1></Link>
          <br/>
          <MyMedications/>
        </Col>
      </Row>
    </Container>
  </div>
);

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Dashboard);