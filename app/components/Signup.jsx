import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import store from '../store'
// import { signUpDispatch } from '../redux/signup'

/* -----------------    COMPONENT     ------------------ */

class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
  }

  render() {
    console.log('props here', this.props)
    const { message } = this.props
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onSignupSubmit}>
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
            <button style={{ backgroundColor: '#3D69A2' }} type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    )
  }

  onSignupSubmit(event) {

    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    this.props.signUpDispatch(email, password)
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({ message: 'Sign up', loggedin: false })
const mapDispatch = (dispatch) => {
  return {
    signUpDispatch: function (email, password) {
      dispatch(signUpDispatch(email, password))
    }
  }
}

export default connect(mapState, mapDispatch)(Signup)
