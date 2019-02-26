export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})

export const getPresidentsSuccess = (presidents) => ({
  type: 'GET_PRESIDENTS_SUCCESS',
  presidents
})

export const setPartyFilter = (party) => ({
  type: 'SET_PARTY_FILTER',
  party
})