'use strict'

const db = require('APP/db')
  , {Review, Magnet, User} = db
  , {expect} = require('chai')

/* global describe it before beforeEach afterEach */

describe('Review', () => {
  let testReview = {}
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))
  beforeEach(function() {
    testReview = {
      rating: 4.5,
      comment: 'A decent magnet!'
    }
    User.create({
      name: 'Zach',
      email: 'zach@fullstack.gov'
    })
    .catch(err => console.error(err))

    Magnet.create({
      quote: 'Many a test has failed',
      price: 3.95,
      image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
      title: 'Koans about Testing',
      description: 'Amazing magnet with Koans from testing',
      itemNumber: 12345,
      size: [2, 4],
      mood: ['zany', 'moody']
    })
    .catch(err => console.error(err))
  })
  describe('model creation checks', () => {
    it('creates a model properly', () => {
      const rev = Review.build(testReview)
      expect(rev.rating).to.equal(4.5)
      expect(rev.comment).to.equal('A decent magnet!')
      return rev.validate()
        .then(review => expect(review).to.equal(null))
    })
  })
  describe('null validation checks', () => {
    it('throws an error if rating is null', () => {
      testReview.rating = null
      return Review.build(testReview).validate()
        .then(err => {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: rating cannot be null')
        })
    })
    it('does not throw an error if comment is null', () => {
      testReview.comment = null
      return Review.build(testReview).validate()
        .then(err => {
          expect(err).not.to.exist
        })
    })
  })
  describe('type validation checks', () => {
    describe('accepts only numbers as a rating', () => {
      it('accepts an integer', () => {
        testReview.rating = 2
        return Review.build(testReview).validate()
          .then(err => {
            expect(err).not.to.exist
          })
      })
      it('accepts a float', () => {
        testReview.rating = 3.576756756
        return Review.build(testReview).validate()
          .then(err => {
            expect(err).not.to.exist
          })
      })
    })
    it('accepts text as comment', () => {
      testReview.comment = 'The magnet was only 3 inches when the description said it was 4'
      return Review.build(testReview).validate()
        .then(err => {
          expect(err).not.to.exist
        })
    })
  })
  describe('association checks', () => {
    it('sets userId', () => Review.create(testReview)
        .then(review => review.setUser(1))
        .then(review => review.setMagnet(1))
        .then(review => {
          expect(review.user_id).to.exist
          expect(review.user_id).to.equal(1)
          expect(review.magnet_id).to.exist
          expect(review.magnet_id).to.equal(1)
        })
      )
  })
})
