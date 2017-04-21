import React from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Receipt from 'material-ui/svg-icons/action/reorder'
import Visibility from 'material-ui/svg-icons/action/visibility'
import Stars from 'material-ui/svg-icons/action/stars'
import Create from 'material-ui/svg-icons/content/create'

const Profile = props => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Menu>
          <MenuItem primaryText="View Current Order" rightIcon={<Visibility/>}/>
          <MenuItem primaryText="See Order History" rightIcon={<Receipt/>}/>
          <MenuItem primaryText="Edit Profile Information" rightIcon={<Create/>}/>
          <MenuItem primaryText="Post a Review" rightIcon={<Stars/>}/>
        </Menu>
      </div>
      <div className="col-md-8">
        I will be filled with stuff eventually
      </div>
    </div>
  )
}

export default Profile
