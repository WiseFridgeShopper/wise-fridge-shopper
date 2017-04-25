import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import Notifications from 'react-notify-toast'

const Root = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div id = "main" className="container-fluid">
      <Navbar user={user}/>
      <Notifications />
      {children}
    </div>
)

export default Root
