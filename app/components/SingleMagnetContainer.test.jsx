import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import store from '../store'

import {shallow, mount, render} from 'enzyme'

import AppBar from 'material-ui/AppBar'

import SingleMagnetContainer from './SingleMagnetContainer'

/* global describe it beforeEach */

describe('<SingleMagnetContainer />', () => {
  let singleMagnetContainerWrapper
  beforeEach('render SingleMagnetContainer', () => {
    const dummyMagnets = [
      {
        title: 'Marcus Aurelius Fridge Magnet #1',
        quote: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.',
        image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-1_large.jpg?v=1380466387',
        itemNumber: 1,
        description: 'High-quality button style magnet with full magnetic back.',
        price: 395,
        size: [2, 3],
        mood: ['happy'],
        speaker_id: 1
      },
      {
        title: 'Marcus Aurelius Fridge Magnet #2',
        quote: 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
        image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-2_large.jpg?v=1380466539',
        itemNumber: 2,
        description: 'High-quality button style magnet with full magnetic back.',
        price: 395,
        size: [2, 3],
        mood: ['happy'],
        speaker_id: 1
      }]
    const dummyReviews = [
      {
        rating: 3.0,
        comment: 'This was an OK magnet',
        user_id: 2,
        magnet_id: 1
      }, {
        rating: 5.0,
        comment: 'This was a Great magnet',
        user_id: 1,
        magnet_id: 2
      }
    ]
    singleMagnetContainerWrapper = shallow(<SingleMagnetContainer store={store} allMagnets={dummyMagnets} selectedMagnet={dummyMagnets[0]} reviews={dummyReviews} />)
  })

  // I think this test is wrong because I am forcing the props onto the component
  it('takes Magnet and Review props', () => {
    expect(Object.keys(singleMagnetContainerWrapper.instance().props)).to.contain('allMagnets')
    expect(Object.keys(singleMagnetContainerWrapper.instance().props)).to.contain('selectedMagnet')
    expect(Object.keys(singleMagnetContainerWrapper.instance().props)).to.contain('reviews')
  })

  // Continue tests from here
  it('renders proper components', () => {
    expect(singleMagnetContainerWrapper.contains(<AppBar style={{backgroundColor: 'black'}} showMenuIconButton={false}/>)).to.equal(true)
  })
})
