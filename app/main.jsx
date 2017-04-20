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

import AllMagnets from './components/AllMagnets'
import AllSpeakers from './components/AllSpeakers'
import SingleMagnet from './components/SingleMagnet'
import SingleSpeaker from './components/SingleSpeaker'
import Account from './components/Account'
import Checkout from './components/Checkout'
import History from './components/History'
import Cart from './components/Cart'
import Root from './components/Root'

import ErrorPage from './components/ErrorPage'
import Forbidden from './components/Forbidden'

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRedirect to="/jokes" />
          <Route path="/jokes" component={Jokes} />
          <Route path="/allMagnets" component={AllMagnets} />
          <Route path="/allSpeakers" component={AllSpeakers} />
          <Route path="/singleMagnet" component={SingleMagnet} />
          <Route path="/singleSpeaker" component={SingleSpeaker} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/history" component={History} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/forbidden" component={Forbidden} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
)
