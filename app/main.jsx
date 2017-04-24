'use strict'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import HomeContainer from './components/HomeContainer'
import SingleSpeakerContainer from './components/SingleSpeakerContainer'
import SingleMagnetContainer from './components/SingleMagnetContainer'
import Account from './components/Account'
import AllMagnets from './components/AllMagnets'
import AllSpeakers from './components/AllSpeakers'
// import Account from './components/Account'
import Checkout from './components/Checkout'
import History from './components/History'
import Cart from './components/Cart'
import Root from './components/Root'
import Profile from './components/Profile'

import ErrorPage from './components/ErrorPage'
import Forbidden from './components/Forbidden'

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRedirect to="/home" />
          <Route path="/home" component={HomeContainer} />
          <Route path="/allMagnets" component={AllMagnets} />
          <Route path="/allSpeakers" component={AllSpeakers} />
          <Route path="/speakers/:id" component={SingleSpeakerContainer} />\
          <Route path="/magnets/:id" component={SingleMagnetContainer} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/history" component={History} />
          <Route path="/cart" component={Cart} />

          <Route path="/error" component={ErrorPage} />
          <Route path="/forbidden" component={Forbidden} />
          <Route path="/profile" component={Profile} />

        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
)

          // <Route path="/allMagnets" component={AllMagnets} />
          // <Route path="/allSpeakers" component={AllSpeakers} />
          // <Route path="/account" component={Account} />
