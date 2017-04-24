import axios from 'axios'
import initialState from '../initialState'

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SELECT_SPEAKER:
    newState.selectedSpeaker = action.speaker
    break
  case RESET_SPEAKER:
    newState.selectedSpeaker = action.emptySpeaker
    break
  case GET_ALL_SPEAKERS:
    newState.allSpeakers = action.speakers
    break
  default:
    return state
  }
  return newState
}

const ADD_SPEAKER = 'SELECT_SPEAKER'
const DELETE_SPEAKER = 'SELECT_SPEAKER'
const SELECT_SPEAKER = 'SELECT_SPEAKER'
const RESET_SPEAKER = 'RESET_SPEAKER'
const GET_ALL_SPEAKERS = 'GET_ALL_SPEAKERS'

// export const addSpeaker = speaker => ({
//   type: SELECT_SPEAKER, speaker
// })

// export const deleteSpeaker = speakerId => ({
//   type: SELECT_SPEAKER, speakerId
// })

// Thunk
export const getAllSpeakersFromServer = () => dispatch =>
  axios.get('/api/speakers')
  .then(speakers => dispatch(getAllSpeakers(speakers.data)))
  .catch(console.error)

export const selectSpeaker = speaker => ({
  type: SELECT_SPEAKER, speaker
})

export const resetSpeaker = () => ({
  type: SELECT_SPEAKER, emptySpeaker: {}
})

const getAllSpeakers = (speakers) => ({
  type: GET_ALL_SPEAKERS, speakers
})

export default reducer
