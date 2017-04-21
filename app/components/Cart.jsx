import React from 'react'
import Drawer from 'material-ui/Drawer'
import CartMenuItem from './CartMenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'


export default class Cart extends React.Component {
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
        <h1>Cart Route</h1>
        <RaisedButton
          label="View Cart"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={700}
          openSecondary={true}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="Shopping Cart" />
          <MenuItem>Magnets</MenuItem>
          {this.state.cartMagnets.map(magnet => {
            return (
              <div>
                <CartMenuItem key={magnet.itemNumber} magnet={magnet}/>
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

// onTouchTap={this.handleClose}
