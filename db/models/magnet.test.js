`use strict`

const db = require('APP/db')
    , {Magnet} = db
    , {expect} = require('chai')

/* global describe it before beforeEach afterEach */

describe('Magnet', () => {
  let testMagnet = {}
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))
  beforeEach(function() {
    testMagnet = {
      quote: 'Many a test has failed',
      price: 3.95,
      image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
      title: 'Koans about Testing',
      description: 'Amazing magnet with Koans from testing',
      itemNumber: 12345,
      size: [2, 4],
      mood: ['zany', 'moody']
    }
  })

  describe('null not permitted for any field', () => {
    it('throws error if quote is null', () => {
      testMagnet.quote = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: quote cannot be null')
        })
    })
    it('throws error if price is null', () => {
      testMagnet.price = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: price cannot be null')
        })
    })
    it('throws error if image is null', () => {
      testMagnet.image = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: image cannot be null')
        })
    })
    // xit('throws error if image is not a URL', () => {
      // testMagnet.quote = null
      // let Magnet.build(testMagnet) = Magnet.build(testMagnet)
      // return Magnet.build(testMagnet).validate()
      //   .then(function(err) {
      //     expect(err).to.exist
      //     expect(err.message).to.equal('notNull Violation: quote cannot be null')
      //   })
    // })
    it('throws error if title is null', () => {
      testMagnet.title = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: title cannot be null')
        })
    })
    it('throws error if description is null', () => {
      testMagnet.description = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: description cannot be null')
        })
    })
    it('throws error if itemNumber is null', () => {
      testMagnet.itemNumber = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: itemNumber cannot be null')
        })
    })
    it('throws error if size is null', () => {
      testMagnet.size = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: size cannot be null')
        })
    })
    it('throws error if mood is null', () => {
      testMagnet.mood = null
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: mood cannot be null')
        })
    })
  })
  describe('check types for specific fields', () => {
    it('doesnt create instance if size is an array of string', () => {
      testMagnet.size = ['2', '4']
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.be.null
        })
    })
    it('doesnt create instance if mood is a comma delimited string', () => {
      testMagnet.mood = 'zany, moody'
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.be.null
        })
    })
    it('doesnt create instance if itemNumber is a float', () => {
      testMagnet.itemNumber = 30.96
      return Magnet.build(testMagnet).validate()
        .then(function(err) {
          expect(err).to.be.null
        })
    })
  })
})
