const request = require('supertest')
, {expect} = require('chai')
, db = require('APP/db')
, app = require('./start')
, {Speaker} = db
, {Order} = db
, {Magnet} = db

describe('/api/orders', () => {
  before('Await database sync', () => db.didSync)
  beforeEach((done) => {
    //fill in create statement
    Speaker.create({
      name: 'Walter White',
      bio: 'High School Chemistry Teacher'
    })
    .then((speaker) => Magnet.create({
      quote: 'I am the one who knocks!',
      price: 1200,
      image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
      title: 'Quote from Season 4, episode 6 of Breaking Bad',
      description: 'A cool quote from Walter White',
      itemNumber: 12346,
      size: [3, 6],
      mood: ['cool', 'badass'],
      speaker_id: 1
    }))
    .then((magnet) => Order.create({
      products: {
        1: 1
      },
      subtotal: 1200.00,
      tax: 0.00,
      address: '123 Fake St',
      city: 'Wilmington',
      state: 'DE',
      zip: '12345',
      shippingMethod: 'Standard',
      purchaseDate: Date.now()
    }))
    .then(done())
    .catch(console.error)
    })
  })
  afterEach('Clear the tables', () => db.truncate({cascade: true})
  .then(() => Speaker.destroy({ truncate: true, restartIdentity: true, cascade: true })))

  describe('GET /:orderId')
  describe('GET /history/:userId')
  describe('GET /cart/:userId')
  describe('POST /')
  describe('DELETE /:orderId')
  describe('PUT /:orderId')
  
})
