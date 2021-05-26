import React from 'react';
import ConditionForm from './ConditionForm';
import { updateCondition, deleteCondition } from '../../actions/conditions/myConditions';
import { setConditionFormDataForEdit, resetNewConditionForm } from '../../actions/conditions/conditionForm'

import { connect } from 'react-redux';

class EditConditionFormWrapper extends React.Component {

  componentDidMount() {
    this.props.condition && this.props.setConditionFormDataForEdit(this.props.condition)
  }

  componentDidUpdate(prevProps) {
    this.props.condition && !prevProps.condition && this.props.setConditionFormDataForEdit(this.props.condition)
  }

  componentWillUnmount() {
    this.props.resetNewConditionForm()
  }

  handleSubmit = (formData) => {
    const { updateCondition, condition, history } = this.props
    updateCondition({
      ...formData, 
      conditionId: condition.id
    }, history)
  }

  render() {
    const { history, condition, deleteCondition } = this.props
    const conditionId = condition ? condition.id : null
    return <>
            <ConditionForm editMode handleSubmit={this.handleSubmit}/><br/>
            <button style={{color: "red", backgroundColor: "white"}} onClick={() => deleteCondition(conditionId, history)}>Delete</button>
          </>
  }
};

export default connect(null, { updateCondition, setConditionFormDataForEdit, resetNewConditionForm, deleteCondition })(EditConditionFormWrapper);