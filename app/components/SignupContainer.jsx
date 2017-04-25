import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import store from '../store'
import Signup from './Signup'
import SignedUp from './SignedUp'
import { signUp } from '../reducers/signup'

/* -----------------    COMPONENT     ------------------ */

class SignupContainer extends React.Component {

  constructor(props) {
    super(props)
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? <SignedUp /> : <Signup onSignupSubmit={this.onSignupSubmit} message={this.props.message} />}
      </div>
    )
  }

  onSignupSubmit(event) {
    event.preventDefault()
    const name = event.target.name.value
    console.log('name field here...', name)
    const email = event.target.email.value
    const password = event.target.password.value
    const address = event.target.address.value
    this.props.signUp(name, email, password, address)
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({
  message: 'Sign up',
  loggedIn: state.auth ? true : false
})

const mapDispatch = {
  signUp
}


export default connect(mapState, mapDispatch)(SignupContainer)
