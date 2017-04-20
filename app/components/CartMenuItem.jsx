import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'

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

  render() {
    const style = {margin: 12}
    return (
        <MenuItem >
          <img style={{padding: '0 20px', width: '100px', height: '75px'}} src={`http://${this.props.magnet.image}`} alt="Magnet pic" />
          <text style={{padding: '0 20px', width: '200px'}} >{this.props.magnet.title}</text>
          <text style={{padding: '0 20px', width: '200px'}} >{`${this.props.magnet.price} X`}</text>
          <input style={{padding: '0 20px'}} onChange={this.handleQuantChange} style={{width: '25px', height: '25px', fontSize: 14}} type='number' defaultValue={1} />
          <text style={{padding: '0 20px', width: '200px'}} >{`= ${this.props.magnet.price * this.state.numItems}`}</text>
          <RaisedButton label="Remove" />
        </MenuItem>
    )
  }
}

