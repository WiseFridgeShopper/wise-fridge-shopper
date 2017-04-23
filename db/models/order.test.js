'use strict'

const db = require('APP/db')
    , {Order} = db
    , {expect} = require('chai')

/* global describe it before afterEach  beforeEach */

const order1 = {
  products: {1: 3, 4: 3},
  subtotal: 23.70,
  tax: 2.04,
  address: '199 Myhouse ln',
  city: 'New York',
  state: 'NY',
  zip: '11211',
  shippingMethod: 'Express',
  completedPurchase: true,
  purchaseDate: Date.now(),
  // user_id: 1
}
const order2 = {
  products: {1: 4, 4: 3},
  address: '500 Somewhere St',
  city: 'Los Angeles',
  state: 'CA',
  zip: '90541',
  shippingMethod: 'Standard',
  completedPurchase: false,
  // user_id: 1
}
const order3 = {
  products: {6: 80},
  subtotal: 316.00,
  tax: 27.26,
  address: '5 Beehive Dr',
  city: 'Chicago',
  zip: '36485',
  shippingMethod: 'Express',
  completedPurchase: true,
  purchaseDate: Date.now(),
  // user_id: 2
}
const order4 = {
  products: {7: 30, 14: 1},
  subtotal: 122.45,
  tax: 10.56,
  zip: 88906,
  shippingMethod: 'Express',
  completedPurchase: false,
  // user_id: 3
}

describe('Order', () => {
  before('Await database sync', () => db.didSync)
  beforeEach((done) => Promise.all([
    Order.create({
      products: {1: 3, 4: 3},
      subtotal: 23.70,
      tax: 2.04,
      address: '199 Myhouse ln',
      city: 'New York',
      state: 'NY',
      zip: '11211',
      shippingMethod: 'Express',
      completedPurchase: true,
      purchaseDate: Date.now(),
      // user_id: 1
    }),
    Order.create({
      products: {1: 4, 4: 3},
      address: '500 Somewhere St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90541',
      shippingMethod: 'Standard',
      completedPurchase: false,
    })]
  )
  .then(done())
  .catch(err => {
    console.error('Error when creating test model')
    console.error(err)
  })
)

  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('Server returns order properly', () => {
    it('returns order with all properties', () =>
      Order.findOne({where: {zip: '11211'}})
        .then(myOrder => {
          expect(myOrder.id).to.equal(2)
          expect(myOrder.products).to.deep.equal({1: 3, 4: 3})
          expect(myOrder.subtotal).to.equal(23.70)
          expect(myOrder.tax).to.equal(2.04)
          expect(myOrder.zip).to.equal('11211')
          expect(myOrder.completedPurchase).to.equal(true)
        })
      )
    it('returns order with default properties when not specified at model creation', () =>
      Order.findOne({where: {zip: '90541'}})
        .then(myOrder => {
          expect(myOrder.products).to.deep.equal({1: 4, 4: 3})
          expect(myOrder.subtotal).to.equal(0)
          expect(myOrder.tax).to.equal(0)
          expect(myOrder.completedPurchase).to.equal(false)
        })
      )
  })
  describe('getterMethods', () => {
    it('calculates cost before shipping', () => {
      Order.findOne({where: {zip: '11211'}})
      .then(myOrder => {
        expect(myOrder.costBeforeShipping).to.equal(25.74)
      })
    })
    it('prints formatted full address', () => {
      Order.findOne({where: {zip: '11211'}})
      // This test occasionally fails because myOrder is undefined. Must be tied to async because it's unpredictable. Failed to fix. Warrants further investigation. -Z
      .then(myOrder => {
        expect(myOrder.fullAddress).to.equal('199 Myhouse ln\nNew York NY\n11211')
      })
    })
  })
})

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
