import React from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Receipt from 'material-ui/svg-icons/action/reorder'
import Visibility from 'material-ui/svg-icons/action/visibility'
import Stars from 'material-ui/svg-icons/action/stars'
import Create from 'material-ui/svg-icons/content/create'
import OrderHistory from './OrderHistory'

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
          {this.state.current ? <h2>Current</h2> : this.state.history ? <OrderHistory userOrders={this.props} /> : this.state.edit ? <h2>Edit</h2> : this.state.review ? <h2>Review</h2> : <div/>}
        </div>
      </div>
    )
  }
}

export default Profile
