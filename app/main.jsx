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
import Home from './components/Home'
import MagnetThumbnail from './components/MagnetThumbnail'
import SpeakerThumbnail from './components/SpeakerThumbnail'
import SingleMagnetContainer from './components/SingleMagnet'
import SingleSpeaker from './components/SingleSpeaker'
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
          <Route path="/home" component={Home} />
          <Route path="/allMagnets" component={MagnetThumbnail} />
          <Route path="/allSpeakers" component={SpeakerThumbnail} />
          <Route path="/magnets/:id" component={SingleMagnetContainer} />
          <Route path="/speakers/:id" component={SingleSpeaker} />
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
