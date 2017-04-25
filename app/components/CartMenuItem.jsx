import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import store from '../store'
import {removeFromOrder} from '../reducers/cart'
import {notify} from 'react-notify-toast'

export default class CartMenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numItems: 1,
    }
  }

  handleQuantChange = (evt) => {
    evt.target.value < 0 ? this.setState({numItems: 0}) : this.setState({numItems: evt.target.value})
  };

  removeFromCart = (evt) => {
    notify.show('Removed from cart', 'warning')
    store.dispatch(removeFromOrder(this.props.cart.id, this.props.magnet.id))
  }

  render() {
    const style = {margin: 12}
    return (
        <MenuItem >
          <div style={{display: 'block'}}>
            <h4 style={{padding: '0 20px', width: '200px'}} >{this.props.magnet.title}</h4>
          </div>
          <div style={{display: 'inLine'}}>
            <img style={{padding: '0 20px', width: '150px', height: '75px'}} src={`${this.props.magnet.image}`} alt="Magnet pic" />
          </div>
          <div style={{display: 'inLine'}}>
            <span style={{padding: '0 20px', width: '150px', height: '75px'}}>{`ID: ${this.props.magnet.id}`}</span>
          </div>
          <div style={{display: 'inLine'}}>
            <span style={{padding: '0 20px', width: '200px'}} >{`$${this.props.magnet.price / 100} x`}</span>
          </div>
          <div style={{display: 'inLine'}}>
            <input style={{padding: '0 20px'}} onChange={this.handleQuantChange} style={{width: '25px', height: '25px', fontSize: 14}} type='number' defaultValue={1} />
          </div>
          <div style={{display: 'inLine'}}>
            <span style={{padding: '0 20px', width: '200px'}} >{`= $${(this.props.magnet.price / 100) * this.state.numItems}`}</span>
          </div>
          <div style={{display: 'inLine'}}>
            <RaisedButton onClick={this.removeFromCart} label="Remove" />
          </div>
        </MenuItem>
    )
  }
}
