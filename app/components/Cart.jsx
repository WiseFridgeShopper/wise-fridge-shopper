import React from 'react'
import store from '../store'
import Drawer from 'material-ui/Drawer'
import CartMenuItem from './CartMenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import {connect} from 'react-redux'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      totalPrice: 0
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const currentOrderProducts = this.props.cart.order ? this.props.cart.order : {}
    const magnetsIncludedInOrder = this.props.allMagnets ? this.props.allMagnets.filter(magnet => currentOrderProducts[magnet.id]) : []
    return (
      <div>
        <RaisedButton onTouchTap={this.handleToggle} style={{ paddingTop: 12 }}
        ><i className="material-icons">shopping_cart</i></RaisedButton>
        <Drawer
          docked={false}
          width={700}
          openSecondary={true}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="Shopping Cart" style={{ backgroundColor: 'black' }} />
          <MenuItem>Magnets</MenuItem>
          {magnetsIncludedInOrder.length && magnetsIncludedInOrder.map(magnet => (
              <div key={magnet.id}>
                <CartMenuItem magnet={magnet}/>
                <hr/>
              </div>
            ))}
          <RaisedButton
          label="Checkout"
          onTouchTap={this.handleToggle}
        />
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
