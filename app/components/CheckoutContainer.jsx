import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Checkout from './Checkout'

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-12'>
            {<Checkout />}
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
