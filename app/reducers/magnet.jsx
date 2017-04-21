import axios from 'axios'
import initialState from '../initialState'

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SELECT_MAGNET:
    newState.selectedMagnet = action.magnet
    break
  case RESET_MAGNET:
    newState.selectedMagnet = action.emptyMagnet
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

// export const addMagnet = Magnet => ({
//   type: SELECT_Magnet, Magnet
// })

// export const deleteMagnet = MagnetId => ({
//   type: SELECT_Magnet, MagnetId
// })

export const selectMagnet = magnet => ({
  type: SELECT_MAGNET, magnet
})

export const resetMagnet = () => ({
  type: SELECT_MAGNET, emptyMagnet: {}
})

export default reducer
