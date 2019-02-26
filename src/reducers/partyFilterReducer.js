const partyFilterReducer = (state = 'All', action) => {
  switch(action.type) {
    case 'SET_PARTY_FILTER':
      return action.party
    default:
      return state
  }
}

export default partyFilterReducer