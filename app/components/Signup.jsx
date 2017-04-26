import React from 'react'
import { browserHistory } from 'react-router'

const Signup = props => {
  console.log(props, '~~~~~~~~')
  return (
    <div className="signin-container">
      <div className="buffer local">
        <form onSubmit={props.onSignupSubmit}>
          <div className="form-group">
            <label>name</label>
            <input
              name="name"
              type="name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>address</label>
            <input
              name="address"
              type="address"
              className="form-control"
            />
          </div>
          <button style={{ backgroundColor: '#3D69A2' }} type="submit" className="btn btn-block btn-primary">{props.message}</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
