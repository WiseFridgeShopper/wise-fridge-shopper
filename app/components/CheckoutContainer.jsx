import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Checkout from './Checkout'

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-12'>
            { <Checkout/> }
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = (storeState, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
