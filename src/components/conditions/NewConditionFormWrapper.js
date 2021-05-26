import React from 'react';
import ConditionForm from './ConditionForm';
import { createCondition } from '../../actions/conditions/myConditions';
import { connect } from 'react-redux';

const NewConditionFormWrapper = ({ history, createCondition }) => {

  const handleSubmit = (formData, userId) => {
    createCondition({
      ...formData,
      userId
    }, history)
  }
  return <ConditionForm history={history} handleSubmit={handleSubmit}/>
};

export default connect(null, { createCondition })(NewConditionFormWrapper);