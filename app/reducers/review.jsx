import axios from 'axios'
import initialState from '../initialState'

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SELECT_REVIEWS:
    newState.reviews = action.reviews
    break
  default:
    return state
  }
  return newState
}

const SELECT_REVIEWS = 'SELECT_REVIEWS'
const GET_REVIEWS_MAGNET = 'GET_REVIEWS_MAGNET'
const GET_REVIEWS_USER = 'GET_REVIEWS_USER'
const ADD_REVIEW = 'ADD_REVIEW'

const receiveReviews = reviews => ({
  type: SELECT_REVIEWS,
  reviews
})

const getReviewsByMagnet = magnetId => {
  return dispatch => {
    axios.get(`/api/magnets/${magnetId}/reviews`)
    .then(response => {
      dispatch(receiveReviews(response.data))
    })
  }
}

const getReviewsByUser = userId => {
  return dispatch => {
    axios.get(`/api/users/${userId}/reviews`)
    .then(response => {
      dispatch(receiveReviews(response.data))
    })
  }
}

export default reducer
