import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import itemReducer from './itemReducer'
import authReducer from './authReducer'

export default combineReducers({
  items: itemReducer,
  auth: authReducer,
  form: formReducer,
})
