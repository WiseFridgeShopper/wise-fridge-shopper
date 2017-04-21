import axios from 'axios'
import store from '../store'
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

export const addToOrder = (orderId, magnetId) => dispatch => {
  const tempCart = Object.assign({}, store.state.cart)
  tempCart[magnetId] = 1
  axios.put(`/api/orders/${orderId}`, {product: tempCart})
  const newMagnet = store.state.allMagnets.filter(magnet => magnet.id === magnetId)
  const newMagnetId = newMagnet.id
  dispatch(addToCart({newMagnetId: 1}))
}

export const removeFromOrder = (orderId, magnetId) => dispatch => {
  const tempCart = Object.assign({}, store.state.cart)
  for (let magnet in tempCart) {
    if (magnet === magnetId) { delete tempCart[magnet] }
  }
  axios.put(`/api/orders/${orderId}`, {product: tempCart})
  .then((order) => dispatch(RemoveFromCart(order)))
  .catch(err => console.log(err))
  // needs to take an order id and magnet id and remove the matching row from the magnet from the order.product
  // and the MagnetsOrders 'through table'?
}

export const updateQuant = (orderId, magnetId, quant) => dispatch =>
    axios.put(`/api/orders/${orderId}`, {magnetid: quant})
      .then((/*what will be returned here?*/) => dispatch(ChangeItemQuantity({magnetid: quant})))

export default reducer


//[null,{5:3, 4: 5}]
