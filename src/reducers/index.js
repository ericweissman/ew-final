import presidentsReducer from './presidentsReducer'
import isLoadingReducer from './isLoadingReducer'
import hasErroredReducer from './hasErroredReducer'
import partyFilterReducer from './partyFilterReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  presidents: presidentsReducer,
  partyFilter: partyFilterReducer,
})

export default rootReducer