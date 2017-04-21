import React from 'react'
// import RaisedButton from 'material-ui/RaisedButton'
// import TextField from 'material-ui/TextField'

export const Login = ({ login }) => (
  <div className='container-fluid'>
    <form className='row' onSubmit={evt => {
      evt.preventDefault()
      console.log('testing', evt.target)
      login(evt.target.email.value, evt.target.password.value)
    } }>
      <div>
        <input name="email" type="text" placeholder="Enter Email Address"/>

        <input name="password" type="password" placeholder="Enter Password" />

        <button label="login" type="submit" value="Login" >Login</button>
      </div>
    </form>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)
