const exp = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_CONDITIONS":
      return action.conditions
    case "CLEAR_CONDITIONS":
      return []
    case "ADD_CONDITION":
      return state.concat(action.condition)
    case "UPDATE_CONDITION":
      return state.map(condition => condition.id === action.condition.id ? action.condition : condition)
    case "DELETE_CONDITION":
      return state.filter(condition => condition.id === action.conditionId ? false : true)    
    default:
      return state
  }
}

export default exp