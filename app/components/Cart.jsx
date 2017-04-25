import React from 'react'
import store from '../store'
import Drawer from 'material-ui/Drawer'
import CartMenuItem from './CartMenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import Badge from 'material-ui/Badge'

import {stringToJson} from '../reducers/cart'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      totalPrice: 0
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    const currentOrderProducts = this.props.cart.products ? stringToJson(this.props.cart.products) : {}
    const magnetsIncludedInOrder = this.props.allMagnets ? this.props.allMagnets.filter(magnet => currentOrderProducts[magnet.id]) : []
    const cartSize = magnetsIncludedInOrder.length
    return (
      <div>
        <RaisedButton onTouchTap={this.handleToggle} style={{ paddingTop: 12 }}
        ><Badge badgeContent={cartSize} badgeStyle={{top: 10}}style={{top: '-20px', left: '20px', position: 'absolute'}} primary={true} ><i className="material-icons">shopping_cart</i></Badge></RaisedButton>
        <Drawer
          docked={false}
          width={700}
          openSecondary={true}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <AppBar title="Shopping Cart" showMenuIconButton={false} style={{ backgroundColor: 'black' }} />
          <MenuItem>Magnets</MenuItem>
          {magnetsIncludedInOrder.length && magnetsIncludedInOrder.map(magnet => (
            <div key={magnet.id}>
              <CartMenuItem cart={this.props.cart} magnet={magnet} />
              <hr />
            </div>
          ))}
          <Link to="/checkout">
            <RaisedButton
              style={{ float: 'right', marginRight: '10px' }}
              label="Checkout"
              onTouchTap={this.handleToggle}
            />
          </Link>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    allMagnets: state.magnet.allMagnets
  }
}

const mapDispatchToProps = (dispatch) => ({})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer
// onTouchTap={this.handleClose}
