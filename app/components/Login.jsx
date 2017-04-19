import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export const Login = ({ login }) => (
  <div className='container-fluid'>
    <form className='row' onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <div className='col-md-4'>
        <TextField name="username" />
      </div>
      <div className='col-md-4'>
        <TextField name="password" type="password" />
      </div>
      <div className='col-md-4'>
        <RaisedButton label="login" type="submit" value="Login" />
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
