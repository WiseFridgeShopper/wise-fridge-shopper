import React from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
import Cart from './Cart'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container-fluid">
          <div>
            <div className="nav navbar-nav">
              <div>
                <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0273/4903/t/2/assets/logo.png?15137632299515728708" /></Link>
              </div>
              <div>
                <Link to="/allSpeakers" activeClassName="active">Speakers</Link>
              </div>
              <div className="col-lg-2">
                <Link to="/allMagnets" activeClassName="active">Magnets</Link>
              </div>
              <div className="col-lg-2">
                <div>
                  { <Cart/> }
                </div>
              </div>
            </div>
            <div className="nav pull-right col-lg-2">
              <div>
                <div>
                  {this.props.user ? <WhoAmI/> : <Login/>}
                </div>
              </div>
            </div>
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
