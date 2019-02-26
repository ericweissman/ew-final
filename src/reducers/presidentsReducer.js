const presidentsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PRESIDENTS_SUCCESS':
      return action.presidents
    default:
      return state
  }
}