import React from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
import CartContainer from './Cart'
import { setView } from '../reducers/selectView'
import store from '../store'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/home">Wisefridge</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to='/speakers' onClick={this.props.renderSpeakers}>Speakers</Link></li>
              <li className="active"><Link to='/magnets' onClick={this.props.renderMagnets}>Magnets</Link></li>
              <li className="active">{ <CartContainer/> }</li>
              { this.props.loggedIn ? <li className="active"><Link to="/profile" activeClassName="active">User Profile</Link></li> : <li/> }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {!this.props.user ? <li><Link to="signup" className="signup" activeClassName="active">Signup</Link></li> : <li />}
              {!this.props.user ? <li><a href='/api/auth/login/google'><button className="google" type="button">Google</button></a></li> : <li />}
              {!this.props.user ? <li><a href='/api/auth/login/facebook'><button className="facebook" type="button">Facebook</button></a></li> : <li />}
              <li className="active">
                {this.props.user ? <WhoAmI /> : <Login user={this.props.user} />}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const renderMagnets = () => {
  store.dispatch(setView('magnets'))
}

const renderSpeakers = () => {
  store.dispatch(setView('speakers'))
}

import { login } from 'APP/app/reducers/auth'

const mapStateToProps = (state) => ({
  loggedIn: state.auth ? true : false
})
const mapDispatchToProps = dispatch => ({
  renderSpeakers: renderSpeakers,
  renderMagnets: renderMagnets,
  login
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
