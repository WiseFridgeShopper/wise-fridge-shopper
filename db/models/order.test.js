'use strict'

const db = require('APP/db')
    , {Order} = db
    , {expect} = require('chai')

/* global describe it before afterEach  beforeEach */

describe('Order', () => {
  before('Await database sync', () => db.didSync)
  beforeEach(function() {
    // Order.create({
    //   products: {1: 3, 4: 3},
    //   subtotal: 23.70,
    //   tax: 2.04,
    //   address: '199 Myhouse ln',
    //   city: 'New York',
    //   state: 'NY',
    //   zip: '11211',
    //   shippingMethod: 'Express',
    //   completedPurchase: true,
    //   purchaseDate: Date.now(),
    //   // user_id: 1
    // },
    //   {
    //     products: {},
    //     address: '500 Somewhere St',
    //     city: 'Los Angeles',
    //     state: 'CA',
    //     zip: '90541',
    //     shippingMethod: 'Standard',
    //     completedPurchase: false,
    //     // user_id: 1
    //   },
    //   {
    //     products: {6: 80},
    //     subtotal: 316.00,
    //     tax: 27.26,
    //     address: '5 Beehive Dr',
    //     city: 'Chicago',
    //     zip: '36485',
    //     shippingMethod: 'Express',
    //     completedPurchase: true,
    //     purchaseDate: Date.now(),
    //     // user_id: 2
    //   },
    //   {
    //     products: {7: 30, 14: 1},
    //     subtotal: 122.45,
    //     tax: 10.56,
    //     zip: 88906,
    //     shippingMethod: 'Express',
    //     completedPurchase: false,
    //     // user_id: 3
    //   }
    // )
  })

  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('Make sure Order model works', () => {
    it('checks if all properties are there when all values are input', () =>
      Order.findOne({where: {zip: '11211'}})
        .then(myOrder => expect(myOrder).to.equal({
          products: {1: 3, 4: 3},
          subtotal: 23.70,
          tax: 2.04,
          address: '199 Myhouse ln',
          city: 'New York',
          state: 'NY',
          zip: '11211',
          shippingMethod: 'Express',
          completedPurchase: true,
          purchaseDate: Date.now(), // How do I check this correctly?
          // user_id: 1
        }
        )))

    // it('checks if all properties are there when only some values are input', () =>
    //   Order.findOne({where: {zip: '90541'}})
    //     .then(myOrder => expect(myOrder).to.equal({
    //       products: {},
    //       subtotal: 0.00,
    //       tax: 0.00,
    //       address: '500 Somewhere St',
    //       city: 'Los Angeles',
    //       state: 'CA',
    //       zip: '90541',
    //       shippingMethod: null,
    //       completedPurchase: false,
    //       purchaseDate: null,
    //       // user_id: 1
    //     })
    //   ))

    // it('checks to see if the property values are there', () =>
    //   Order.findOne({where: {zip: '11211'}})
    //     .then(newOrder => expect(newOrder.subtotal).to.equal(23.70)))

    // describe('retrieves correct orders by purchase boolean value and user id', () => {
    //   it('returns all completed orders', () =>
    //     Order.findAll({where: {completedPurchase: true}})
    //     .then(purchasedOrders => expect(purchasedOrders.length).to.equal(2))
    //     .then(purchasedOrders => expect(purchasedOrders[0].zip).to.equal('11211'))
    //     .then(purchasedOrders => expect(purchasedOrders[1].zip).to.equal('36485'))
    //     )

    //   it('returns all completed orders of a user', () =>
    //     Order.findAll({where: {completedPurchase: true, user_id: 1}})
    //     .then(purchasedOrders => expect(purchasedOrders.length).to.equal(1))
    //     .then(purchasedOrders => expect(purchasedOrders[0].zip).to.equal('11211'))
    //     )

    //   it('returns all pending orders', () =>
    //     Order.findAll({where: {completedPurchase: false}})
    //     .then(purchasedOrders => expect(purchasedOrders.length).to.equal(2))
    //     .then(purchasedOrders => expect(purchasedOrders[0].zip).to.equal('90541'))
    //     .then(purchasedOrders => expect(purchasedOrders[1].zip).to.equal('88906'))
    //     )

    //   it('returns the pending order of a user', () =>
    //     Order.findAll({where: {completedPurchase: false, user_id: 3}})
    //     .then(purchasedOrders => expect(purchasedOrders.length).to.equal(1))
    //     .then(purchasedOrders => expect(purchasedOrders[1].zip).to.equal('88906'))
    //     )
    // })

    // describe('Can list out products and their values', () => {
    //   it('returns a list of products with number of units purchased', () =>
    //     Order.findOne({where: {zip: 88906}})
    //     .then(order => {
    //       const products = Object.keys(order)
    //       const output = products.map((item) => {
    //         return `This order contains ${order[item]} of item #${item}`
    //       })
    //       expect(output.join('\n').to.equal('This order contains 30 of item #7\nThis order contains 1 of item #14'))
    //     })
    //     )
    // })

    // describe('getter methods:', () => {
    //   it('correctly returns the full address getter method', () =>
    //     Order.findOne({where: {zip: '90541'}})
    //       .then(order => expect(order.fullAddress()).to.equal('500 Somewhere St\nLos Angeles CA\n90541')))

    //   it('correctly returns the correct cost before shipping', () =>
    //     Order.findOne({where: {zip: '88906'}})
    //       .then(order => expect(order.costBeforeShipping()).to.equal(133.01)))
    // })
  })
})
