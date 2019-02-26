import { isLoading, hasErrored, getPresidentsSuccess } from '../actions'

export const fetchStaff = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('http://localhost:3001/api/v1/presidents')
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(getPresidentsSuccess(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}