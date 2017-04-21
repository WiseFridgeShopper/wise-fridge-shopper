import axios from 'axios'
const initialState = {
  order: {}
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case ADD_TO_CART:
    newState.order = Object.assign({}, newState.order, action.magnetWithQuant)
    break
  case REMOVE_FROM_CART:
    delete newState.order[action.magnetid]
    break
  case CHANGE_ITEM_QUANTITY:
    newState.order[action.magnetWithQuant.id] = action.magnetWithQuant.quant
    break
  default:
    return state
  }
  return newState
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY'

export const addToCart = magnetWithQuant => ({
  type: ADD_TO_CART, magnetWithQuant
})

export const RemoveFromCart = magnetId => ({
  type: REMOVE_FROM_CART, magnetId
})

export const ChangeItemQuantity = magnetWithQuant => ({
  type: CHANGE_ITEM_QUANTITY, magnetWithQuant
})
