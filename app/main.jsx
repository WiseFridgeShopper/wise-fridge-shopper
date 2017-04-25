'use strict'

import injectTapEventPlugin from 'react-tap-event-plugin'

// JM/RT - consider using commitizen for git commits

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'

// JM/RT - get rid of old bones stuff (e.g. jokes)
import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import HomeContainer from './components/HomeContainer'
import SingleSpeakerContainer from './components/SingleSpeakerContainer'
import SingleMagnetContainer from './components/SingleMagnetContainer'
// import Account from './components/Account'
import Checkout from './components/Checkout'
import History from './components/History'
import Cart from './components/Cart'
import Root from './components/Root'

import ProfileContainer from './components/ProfileContainer'
import SignupContainer from './components/SignupContainer'

import ErrorPage from './components/ErrorPage'
import Forbidden from './components/Forbidden'

// Action Creators
import {setView} from './reducers/selectView'
import {getAllSpeakersFromServer, selectSpeaker} from './reducers/speaker'
import {getAllMagnetsFromServer, selectMagnet} from './reducers/magnet'
import {getReviewsByMagnet} from './reducers/review'
import {loadCartOrder} from './reducers/cart'
// get user if logged in

const getHomeData = nextRouterState => {
  store.dispatch(setView('speakers'))
  store.dispatch(getAllSpeakersFromServer())
  store.dispatch(getAllMagnetsFromServer())
  store.dispatch(loadCartOrder(1))
}

const onSpeakerEnter = nextRouterState => {
  const speakerId = Number(nextRouterState.params.id)
  const [speaker] = store.getState().speaker.allSpeakers.filter(speaker => speaker.id === speakerId)
  store.dispatch(selectSpeaker(speaker))
}

const onMagnetEnter = nextRouterState => {
  const magnetId = Number(nextRouterState.params.id)
  const [magnet] = store.getState().magnet.allMagnets.filter(magnet => magnet.id === magnetId)
  store.dispatch(getReviewsByMagnet(magnetId))
  store.dispatch(selectMagnet(magnet))
}

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRedirect to="/home" />
          <Route path="/home" component={HomeContainer} onEnter={getHomeData}/>
          <Route path="/speakers" component={HomeContainer} />
          <Route path="/magnets" component={HomeContainer} />
          <Route path="/speakers/:id" component={SingleSpeakerContainer} onEnter={onSpeakerEnter} />
          <Route path="/magnets/:id" component={SingleMagnetContainer} onEnter={onMagnetEnter}/>
          <Route path="/checkout" component={Checkout} />
          <Route path="/history" component={History} />
          <Route path="/cart" component={Cart} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/forbidden" component={Forbidden} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/signup" component={SignupContainer} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
)
