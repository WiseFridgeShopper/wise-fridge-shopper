import React from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Receipt from 'material-ui/svg-icons/action/reorder'
import Visibility from 'material-ui/svg-icons/action/visibility'
import Stars from 'material-ui/svg-icons/action/stars'
import Create from 'material-ui/svg-icons/content/create'
import RaisedButton from 'material-ui/RaisedButton'
import CartMenuItem from './CartMenuItem'
import AppBar from 'material-ui/AppBar'
import OrderHistory from './OrderHistory'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: false,
      history: false,
      edit: false,
      review: false
    }
  }

  currentToggle = () => {
    this.setState({
      current: true,
      history: false,
      edit: false,
      review: false
    })
  }

  historyToggle = () => {
    this.setState({
      current: false,
      history: true,
      edit: false,
      review: false
    })
  }

  editToggle = () => {
    this.setState({
      current: false,
      history: false,
      edit: true,
      review: false
    })
  }

  reviewToggle = () => {
    this.setState({
      current: false,
      history: false,
      edit: false,
      review: true
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <Menu>
            <MenuItem onClick={this.currentToggle} primaryText="View Current Order" rightIcon={<Visibility />} />
            <MenuItem onClick={this.historyToggle} primaryText="See Order History" rightIcon={<Receipt />} />
            <MenuItem onClick={this.editToggle} primaryText="Edit Profile Information" rightIcon={<Create />} />
            <MenuItem onClick={this.reviewToggle} primaryText="Post a Review" rightIcon={<Stars />} />
          </Menu>
        </div>
        <div className="col-md-8">
          {this.state.current ? <CurrentCart allMagnets={this.props.allMagnets} cart={this.props.cart} />
            : this.state.history ? <OrderHistory userOrders={this.props} />
              : this.state.edit ? <AppBar title="Edit Profile" showMenuIconButton={false} style={{ backgroundColor: 'black' }} />
                : this.state.review ? <AppBar title="Reviews" showMenuIconButton={false} style={{ backgroundColor: 'black' }} />
                  : <div />}
        </div>
      </div>
    )
  }
}

// RaisedButton should link us to checkout page
const CurrentCart = props => {
  const currentOrderProducts = props.cart.order ? props.cart.order : {}
  const magnetsIncludedInOrder = props.allMagnets ? props.allMagnets.filter(magnet => currentOrderProducts[magnet.id]) : []
  return (<div>
    <AppBar title="Shopping Cart" showMenuIconButton={false} style={{ backgroundColor: 'black' }} />
    <h2>Magnets</h2>
    {magnetsIncludedInOrder.length && magnetsIncludedInOrder.map(magnet => {
      return (
        <div key={magnet.itemNumber}>
          <CartMenuItem magnet={magnet} />
          <hr />
        </div>
      )
    })}
    <Link to="/checkout">
      <RaisedButton
        label="Checkout"
      />
    </Link>
  </div>)
}

const mapStateToProps = (storeState, ownProps) => ({
  cart: storeState.cart,
  allMagnets: storeState.magnet.allMagnets
})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
