// import axios from 'axios'
// import store from '../store'
// import initialState from '../initialState'

// const reducer = (state = initialState.cart, action) => {
//   const newState = Object.assign({}, state)
//   switch (action.type) {
//   // case :

//   default:
//     return state
//   }
//   return newState
// }

// const LOAD_USER = 'LOAD_USER'


// export const loadUser = user => ({
//   type: LOAD_USER, user
// })

// export const retrieveUser = userId => dispatch => {

//   // const tempCart = Object.assign({}, store.state.cart)
//   // tempCart[magnetId] = 1
//   axios.put(`/api/orders/${orderId}`, {product: tempCart})
//   const newMagnet = store.state.allMagnets.filter(magnet => magnet.id === magnetId)
//   const newMagnetId = newMagnet.id
//   dispatch(addToCart({newMagnetId: 1}))
// }

// export const removeFromOrder = (orderId, magnetId) => dispatch => {
//   // updating an order will create a new Order.product object (corresponding to the row)
//   const tempCart = Object.assign({}, store.state.cart)
//   // Loop searches for the product key we are removing and deletes it
//   for (let magnet in tempCart) {
//     if (magnet === magnetId) { delete tempCart[magnet] }
//   }
//   // Axios request sends new product object (with removed key)
//   axios.put(`/api/orders/${orderId}`, {product: tempCart})
//   .then((order) => dispatch(RemoveFromCart(order)))
//   .catch(err => console.log(err))
// }

// export const updateQuant = (orderId, magnetId, quant) => dispatch =>
//     axios.put(`/api/orders/${orderId}`, {magnetid: quant})
//       .then((/*what will be returned here?*/) => dispatch(ChangeItemQuantity({magnetid: quant})))

// export default reducer
