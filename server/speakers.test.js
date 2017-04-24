const request = require('supertest')
, {expect} = require('chai')
, db = require('APP/db')
, app = require('./start')
, {Speaker} = db
, {Magnet} = db

/* global describe it before beforeEach afterEach */

const postBody = {
  name: 'My Test Speaker',
  bio: 'An amazing test bio, amirite?'
}

describe('/api/speakers', () => {
  before('Await database sync', () => db.didSync)
  beforeEach((done) =>
    // Refactor to Promise.all()? Z tried and failed here!
      Speaker.create({
        name: 'God',
        bio: 'creator of all things (except computers)'
      })
      .then((speaker) => Magnet.create({
        quote: 'Many a test has failed',
        price: 395,
        image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
        title: 'Koans about Testing',
        description: 'Amazing magnet with Koans from testing',
        itemNumber: 12345,
        size: [2, 4],
        mood: ['zany', 'moody'],
        speaker_id: 1
      }))
      .then(done())
      .catch(console.error)
  )
  afterEach('Clear the tables', () => db.truncate({cascade: true})
  .then(() => Speaker.destroy({ truncate: true, restartIdentity: true, cascade: true })))
  // ^ Destroys model to restart primary key count. If not, tests must increment ids.

  describe('GET /', () => {
    describe('gets all speakers', () =>
      it('responds with a 200 and sends an array of speakers', () =>
          request(app)
          .get(`/api/speakers`)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.ok
            expect(res.body[0].name).to.equal('God')
            expect(res.body.length).to.equal(1)
          })
        ))
  })
  describe('GET /:id', () => {
    describe('finds a speaker by id', () =>
      it('responds with a 200 and a single speaker', () =>
        request(app)
          .get('/api/speakers/1')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.ok
            expect(res.body.id).to.equal(1)
            expect(res.body.magnets.length).to.equal(1)
            expect(res.body.magnets[0].id).to.equal(1)
            expect(res.body.bio).to.equal('creator of all things (except computers)')
          })
      )
    )
  })
  describe('DELETE /:id', () => {
    describe('deletes a speaker by id', () =>
      it('responds with a 204 and no content', () =>
      request(app)
        .delete('/api/speakers/1')
        .expect(204)
        .then(res => {
          expect(res.body).to.be.empty
        }).then(() => request(app)
          .get('/api/speakers')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.empty
          })
        )
      )
    )
  })
  describe('PUT /:id', () => {
    describe('updates (put) a speaker by id', () =>
      it('responds with a 200 and an updated speaker', () =>
      request(app)
        .put('/api/speakers/1')
        .send({
          bio: 'All powerful bio'
        })
        .expect(200)
        .then(res => {
          expect(res.body.length).to.equal(2) // tests that Model update returns rows affected and the instance
          expect(res.body[1]).not.to.be.empty
          expect(res.body[1].bio).to.equal('All powerful bio')
        })
        .then(() => request(app)
          .get('/api/speakers/1')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.ok
            expect(res.body.id).to.equal(1)
            expect(res.body.bio).to.equal('All powerful bio')
          })
        )
      )
    )
  })
})
