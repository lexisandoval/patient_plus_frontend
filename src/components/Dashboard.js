import React from 'react';
import MyConditions from '../components/conditions/MyConditions';
import MyDoctors from '../components/doctors/MyDoctors';
import MyMedications from '../components/medications/MyMedications';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const Dashboard = () => (
  <div className="space">
    <h1 style={{fontWeight:600}}>Welcome back!</h1>
    <h2 className="subhead">Here's a preview of your medical information:</h2>
    <Container>
      <Row>
        <Col>
          <MyConditions/>
        </Col>
        <Col>
          <MyMedications/>
        </Col>
        <Col>
          <MyDoctors/>
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