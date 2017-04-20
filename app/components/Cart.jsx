import React from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const dummyOrder = {3: '5', 7: '4'}
    const dummyMagnet = {
      quote: 'Many a test has failed',
      price: 3.95,
      image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
      title: 'Koans about Testing',
      description: 'Amazing magnet with Koans from testing',
      itemNumber: 12345,
      size: [2, 4],
      mood: ['zany', 'moody']
    }
    return (
      <div>
        <h1>Cart Route</h1>
        <RaisedButton
          label="View Cart"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={375}
          openSecondary={true}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Product 1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Product 2</MenuItem>
          <img src={`http://${dummyMagnet.image}`} alt="Magnet pic" style="width:304px;height:228px;"/>
          <MenuItem onTouchTap={this.handleClose}>{dummyOrder[3]}</MenuItem>
        </Drawer>
      </div>
    )
  }
}
