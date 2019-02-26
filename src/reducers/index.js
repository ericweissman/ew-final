import {presidentsReducer} from './presidentsReducer'
import {isLoadingReducer} from './isLoadingReducer'
import {hasErroredReducer} from './hasErroredReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  presidents: presidentsReducer,
})

export default rootReducer