import { combineReducers } from 'redux'

// JM-RT - not a big deal, but maybe use import instead
const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  speaker: require('./speaker').default,
  magnet: require('./magnet').default,
  review: require('./review').default,
  selectedTab: require('./selectView').default,
})

export default rootReducer
