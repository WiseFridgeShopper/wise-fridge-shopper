import axios from 'axios'
import store from '../store'
import initialState from '../initialState'

const reducer = (state = initialState.cart, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case LOAD_ORDER:
    newState.order = action.order
    break
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
const LOAD_ORDER = 'LOAD_ORDER'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY'

export const loadCart = cart => ({
  type: LOAD_ORDER, cart
})

export const addToCart = magnetWithQuant => ({
  type: ADD_TO_CART, magnetWithQuant
})

export const RemoveFromCart = magnetId => ({
  type: REMOVE_FROM_CART, magnetId
})

export const ChangeItemQuantity = magnetWithQuant => ({
  type: CHANGE_ITEM_QUANTITY, magnetWithQuant
})


export const loadCartOrder = (userId) => dispatch => {
  axios.get(`api/orders/cart/${userId}`)
  .then(cart => {
    dispatch(loadCart(cart))
  })
}

export const addToOrder = (orderId, magnetId) => dispatch => {
  const tempCart = Object.assign({}, store.state.cart)
  tempCart[magnetId] = 1
  axios.put(`/api/orders/${orderId}`, {product: tempCart})
  const newMagnet = store.state.allMagnets.filter(magnet => magnet.id === magnetId)
  const newMagnetId = newMagnet.id
  dispatch(addToCart({newMagnetId: 1}))
}

export const removeFromOrder = (orderId, magnetId) => dispatch => {
  // updating an order will create a new Order.product object (corresponding to the row)
  const tempCart = Object.assign({}, store.state.cart)
  // Loop searches for the product key we are removing and deletes it
  for (let magnet in tempCart) {
    if (magnet === magnetId) { delete tempCart[magnet] }
  }
  // Axios request sends new product object (with removed key)
  axios.put(`/api/orders/${orderId}`, {product: tempCart})
  .then((order) => dispatch(RemoveFromCart(order)))
  .catch(err => console.log(err))
}

export const updateQuant = (orderId, magnetId, quant) => dispatch =>
    axios.put(`/api/orders/${orderId}`, {magnetid: quant})
      .then((/*what will be returned here?*/) => dispatch(ChangeItemQuantity({magnetid: quant})))

export default reducer
