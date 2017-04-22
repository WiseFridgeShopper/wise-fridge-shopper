import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  speaker: require('./speaker').default,
  review: require('./review').default
})

export default rootReducer
