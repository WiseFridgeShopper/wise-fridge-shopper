import axios from 'axios'
import initialState from '../initialState'

const reducer = (state = initialState.allMagnets, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SELECT_MAGNET:
    newState.selectedMagnet = action.magnet
    break
    // JM/RT - consider if actions need parameters/action properties
  case RESET_MAGNET:
    newState.selectedMagnet = action.emptyMagnet
    break
  case GET_ALL_MAGNETS:
    newState.allMagnets = action.allMagnets
    break
  default:
    return state
  }
  return newState
}

const ADD_MAGNET = 'SELECT_MAGNET'
const DELETE_MAGNET = 'SELECT_MAGNET'
const SELECT_MAGNET = 'SELECT_MAGNET'
const RESET_MAGNET = 'RESET_MAGNET'
const GET_ALL_MAGNETS = 'GET_ALL_MAGNETS'

// export const addMagnet = Magnet => ({
//   type: SELECT_Magnet, Magnet
// })

// export const deleteMagnet = MagnetId => ({
//   type: SELECT_Magnet, MagnetId
// })

export const getAllMagnetsFromServer = () => dispatch => {
  return axios.get('/api/magnets')
  .then(magnets => dispatch(getAllMagnets(magnets.data)))
  // JM/RT - CATCH!
  // toastr maybe? could use material UI toast components
  
}

const getAllMagnets = magnets => ({
  type: GET_ALL_MAGNETS,
  allMagnets: magnets
})

export const selectMagnet = magnet => ({
  type: SELECT_MAGNET, magnet
})

export const resetMagnet = () => ({
  type: SELECT_MAGNET, emptyMagnet: {}
})

export default reducer
