import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  speaker: require('./speaker').default,
  magnet: require('./magnet').default
})

export default rootReducer
