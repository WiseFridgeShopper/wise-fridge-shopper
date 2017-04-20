import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'

// const Root = ({ children }) => (
//   <div id="main" className="container-fluid">
//     <Navbar />
//     { children }
//   </div>
// )

const Root = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div id = "main" className="container-fluid">
      <Navbar user={user}/>
      {children}
    </div>
)

export default Root
