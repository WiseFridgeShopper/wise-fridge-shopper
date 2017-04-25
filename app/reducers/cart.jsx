import axios from 'axios'
import store from '../store'
import initialState from '../initialState'

const reducer = (state = initialState.cart, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
  case LOAD_ORDER:
    newState = action.cart
    break
  case ADD_TO_CART:
    newState.products = action.newCart // Object.assign({}, newState.products, action.magnetWithQuant)
    break
  case REMOVE_FROM_CART:
    delete newState.products[action.magnetid]
    break
  case CHANGE_ITEM_QUANTITY:
    newState.products[action.magnetWithQuant.id] = action.magnetWithQuant.quant
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

export const addToCart = newCart => ({
  type: ADD_TO_CART, newCart
})

export const RemoveFromCart = magnetId => ({
  type: REMOVE_FROM_CART, magnetId
})

export const ChangeItemQuantity = magnetWithQuant => ({
  type: CHANGE_ITEM_QUANTITY, magnetWithQuant
})

export const stringToJson = (jString) => {
  if (!jString) return
  if (typeof jString === 'object') return jString
  const keyVals = jString.slice(1, jString.length-1)
  const kvArr = keyVals.split(', ')
  const order = {}
  kvArr.forEach(item => {
    const itemArr = item.split(':')
    const numKey = Number(itemArr[0])
    order[numKey] = Number(itemArr[1])
  })
  return order
}

export const loadCartOrder = (userId) => dispatch => {
  axios.get(`api/orders/cart/${userId}`)
  .then(cart => {
    const cartOrder = cart.data
    dispatch(loadCart(cartOrder))
  })
}

export const addToOrder = (orderId, magnetId) => dispatch => {
  let tempCart = store.getState().cart.products
  console.log('TC before transform', tempCart)
  tempCart = stringToJson(tempCart)
  console.log('TC', tempCart)
  tempCart[magnetId] = 1
  axios.put(`/api/orders/${orderId}`, {products: tempCart})
  .then((cart) => {
    console.log('Updated Cart ', cart.data)
  })
  dispatch(addToCart(tempCart))
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
