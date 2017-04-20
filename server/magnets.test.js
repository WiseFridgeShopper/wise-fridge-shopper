const request = require('supertest')
    , {expect} = require('chai')
    , db = require('APP/db')
    , app = require('./start')
    , {Magnet} = db

/* global describe it before beforeEach afterEach */

describe('/api/magnets', () => {
  before('Await database sync', () => db.didSync)
  beforeEach(() => {
    Magnet.create({
      id: 1,
      quote: 'Many a test has failed',
      price: 3.95,
      image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
      title: 'Koans about Testing',
      description: 'Amazing magnet with Koans from testing',
      itemNumber: 12345,
      size: [2, 4],
      mood: ['zany', 'moody']
    })
  })
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () => {
    describe('gets all magnets', () =>
      it('responds with a 200', () =>
      request(app)
        .get(`/api/magnets`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.ok
          expect(res.body.length).to.equal(1)
        })
      ))
  })

  describe('GET /:id', () => {
    describe('finds a magnet by id', () =>
      it('responds with a 200 and a single magnet', () =>
      request(app)
        .get('/api/magnets/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.ok
          expect(res.body.id).to.equal(1)
          expect(res.body.quote).to.equal('Many a test has failed')
        })
      )
    )
  })

  describe('DELETE /:id', () => {
    describe('deletes a magnet by id', () =>
      it('responds with a 204 and no content', () =>
      request(app)
        .delete('/api/magnets/1')
        .expect(204)
        .then(res => {
          expect(res.body).to.be.empty
        }).then(() => request(app)
          .get('/api/magnets')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.empty
          })
        )
      )
    )
  })

  describe('PUT /:id', () => {
    describe('updates (put) a magnet by id', () =>
      it('responds with a 200 and an updated magnet', () =>
      request(app)
        .put('/api/magnets/1')
        .send({
          quote: 'Many a test has succeeded'
        })
        .expect(200)
        .then(res => {
          expect(res.body.length).to.equal(2) // tests that Model update returns rows affected and the instance
          expect(res.body[1]).not.to.be.empty
          expect(res.body[1].quote).to.equal('Many a test has succeeded')
        })
        .then(() => request(app)
          .get('/api/magnets/1')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.ok
            expect(res.body.id).to.equal(1)
            expect(res.body.quote).to.equal('Many a test has succeeded')
          })
        )
      )
    )
  })

  describe('POST /', () => {
    describe('creates a new magnet with a post request', () =>
      it('responds with a 201 and a new magnet', () =>
      request(app)
        .post(`/api/magnets`)
        .send({
          id: 2,
          quote: 'An amazing quote',
          price: 4.95,
          image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
          title: 'More Koans about Testing',
          description: 'Mediocre magnet',
          itemNumber: 54321,
          size: [3, 5],
          mood: ['thoughtful', 'brooding']
        })
        .expect(201)
        .then(res => {
          expect(res.body).to.be.ok
          expect(res.body.quote).to.equal('An amazing quote')
          expect(res.body.id).to.equal(2)
          expect(res.body.description).to.equal('Mediocre magnet')
        })
        .then(() =>
          request(app)
            .get(`/api/magnets`)
            .expect(200)
            .then(res => {
              expect(res.body).to.be.ok
              expect(res.body.length).to.equal(2)
            })
        )
      ))
  })
})
