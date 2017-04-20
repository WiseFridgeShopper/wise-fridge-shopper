import React from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
          <Link className="logo" to="/"><img src="" /></Link>
          <div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/speakers" activeClassName="active">Speakers</Link>
              </li>
              <li>
                <Link to="/magnets" activeClassName="active">Magnets</Link>
              </li>
            </ul>
            <ul className="nav pull-right">
              <li>
                <div>
                  {this.props.user ? <WhoAmI/> : <Login/>}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

import {login} from 'APP/app/reducers/auth'

const mapProps = null
const mapDispatch = dispatch => {
  return {}
}

export default connect(mapProps, {login})(Navbar)
