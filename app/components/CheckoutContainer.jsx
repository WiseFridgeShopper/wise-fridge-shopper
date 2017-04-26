import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Checkout from './Checkout'
import axios from 'axios'
import { browserHistory } from 'react-router'
import store from '../store'
import {loadCartOrder} from '../reducers/cart'

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props)

    this.sendOrder = this.sendOrder.bind(this)
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-12'>
            {<Checkout cart={this.props.cart} sendOrder={this.sendOrder}/>}
          </div>
        </div>
      </div>
    )
  }

  sendOrder(event) {
    const order = this.props.order
    console.log('city here', event.target.city.value)
    event.preventDefault()
    order.completedPurchase = true
    order.purchaseDate = new Date()
    order.address = event.target.address.value
    order.city = event.target.city.value
    order.state = event.target.state.value
    order.zip = event.target.zip.value
    order.shippingMethod = event.target.shipping.value
    axios.put(`api/orders/${this.props.cart.id}`, order)
    .then(res => {
      store.dispatch(loadCartOrder(1))
      browserHistory.push('/home')
      console.log('happy')
    })
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    order: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
