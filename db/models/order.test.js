'use strict'

const db = require('APP/db')
    , {Order} = db
    , {expect} = require('chai')

describe('Order', () => {
  before('Await database sync', () => db.didSync)
  beforeEach(Order.create({
    products: {1:3, 4:3},
    subtotal: 23.70,
    tax: 2.04,
    address: '199 Myhouse ln',
    city: 'New York',
    state: 'NY',
    zip: '11211',
    shippingMethod: 'Express',
    completedPurchase: true,
    purchaseDate: Date.now()
  },
  {
    products: {},
    address: '500 Somewhere St',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90541',
    shippingMethod: 'Standard',
    completedPurchase: false,
  },
  {
    products: {6:80},
    subtotal: 316.00,
    tax: 27.26,
    address: '5 Beehive Dr',
    city: 'Chicago',
    zip: '36485',
    shippingMethod: 'Express',
    completedPurchase: true,
    purchaseDate: Date.now()
  },
  {
    products: {7:30, 14:1},
    subtotal: 122.45,
    tax: 10.56,
    shippingMethod: 'Express',
    completedPurchase: false,
  },
  ))
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('Make sure Order is created with all properties')
