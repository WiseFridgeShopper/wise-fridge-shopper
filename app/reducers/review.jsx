import axios from 'axios'
import initialState from '../initialState'

const reducer = (state = initialState.reviews, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SELECT_REVIEWS:
    newState.reviews = action.reviews
    break
  case ADD_REVIEW:
    newState.reviews = newState.reviews.concat([action.review])
    break
  default:
    return state
  }
  return newState
}

const SELECT_REVIEWS = 'SELECT_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'

const receiveReviews = reviews => ({
  type: SELECT_REVIEWS,
  reviews
})

const receiveNewReview = review => ({
  type: ADD_REVIEW,
  review
})

export const getReviewsByMagnet = magnetId => {
  return dispatch => {
    return axios.get(`/api/magnets/${magnetId}/reviews`)
    .then(response => {
      dispatch(receiveReviews(response.data))
    })
  }
}

export const getReviewsByUser = userId => {
  return dispatch => {
    return axios.get(`/api/users/${userId}/reviews`)
    .then(response => {
      dispatch(receiveReviews(response.data))
    })
  }
}

export const addNewReview = (newReviewData, magnetId) => {
  return dispatch => {
    return axios.post(`/api/magnets/${magnetId}/reviews`, newReviewData)
    .then(response => {
      dispatch(receiveNewReview(response.data))
    })
  }
}
export default reducer
