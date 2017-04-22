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
      totalPrice: 10,
      cartMagnets: [{
        quote: 'Many a test has failed',
        price: 3.95,
        image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
        title: 'Koans about Testing',
        description: 'Amazing magnet with Koans from testing',
        itemNumber: 12345,
        size: [2, 4],
        mood: ['zany', 'moody']
      }, {
        quote: 'Different Quote',
        price: 5.95,
        image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-3_large.jpg?v=1380467104',
        title: 'Magnet info',
        description: 'Amazing magnet with Koans from testing',
        itemNumber: 73832,
        size: [2, 4],
        mood: ['zany', 'moody']
      }]
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
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
          {Object.keys(this.props.cart).map(magnet => {
            return (
              <div key={magnet.itemNumber}>
                <CartMenuItem magnet={magnet}/>
                <hr/>
              </div>
            )
          })}
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
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => ({})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer
// onTouchTap={this.handleClose}
