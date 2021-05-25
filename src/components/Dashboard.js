import React from 'react';
import MyConditions from '../components/conditions/MyConditions'
import MyDoctors from '../components/doctors/MyDoctors'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';

const Dashboard = ({ currentUser }) => (
  <div className="space">
    { currentUser ? <h1>Welcome back, {currentUser.attributes.name}!</h1> : null }
    <h2 className="subhead">Here's a preview of your medical information:</h2>
    <Container>
      <Row>
        <Col>
          <MyConditions/>
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