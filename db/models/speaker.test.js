`use strict`

const db = require('APP/db')
    , {Speaker} = db
    , {expect} = require('chai')

/* global describe it before beforeEach afterEach */

describe('Speaker', () => {
  let testSpeaker = {}
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))
  beforeEach(function() {
    testSpeaker = {
      name: 'Grace Hopper',
      bio: 'A remarkable speaker and programmer who knew what she was doing',
    }
  })

  describe('null checks', () => {
    it('throws error if name is null', () => {
      testSpeaker.name = null
      return Speaker.build(testSpeaker).validate()
        .then(function(err) {
          expect(err).to.exist
          expect(err.message).to.equal('notNull Violation: name cannot be null')
        })
    })
    it('does not throw error if bio is null', () => {
      testSpeaker.bio = null
      return Speaker.build(testSpeaker).validate()
        .then(function(err) {
          expect(err).not.to.exist
        })
    })
  })
  describe('data type checking', () => {
    describe('name', () => {
      it('does not accept an array as valid input', () => {
        testSpeaker.name = ['m', 'y', ' ', 'n', 'a', 'm', 'e']
        return Speaker.build(testSpeaker).validate()
          .then(function(err) {
            expect(err).to.exist
            expect(err.message).to.equal('string violation: name cannot be an array or an object')
          })
      })
      it('does not accept an object as valid input', () => {
        testSpeaker.name = {name: 'my name'}
        return Speaker.build(testSpeaker).validate()
          .then(function(err) {
            expect(err).to.exist
            expect(err.message).to.equal('string violation: name cannot be an array or an object')
          })
      })
    })
    describe('bio', () => {
      it('does not accept an array as valid input', () => {
        testSpeaker.bio = ['m', 'y', ' ', 'n', 'a', 'm', 'e']
        return Speaker.build(testSpeaker).validate()
          .then(function(err) {
            expect(err).to.exist
            expect(err.message).to.equal('string violation: bio cannot be an array or an object')
          })
      })
      it('does not accept an object as valid input', () => {
        testSpeaker.bio = {bio: 'my bio'}
        return Speaker.build(testSpeaker).validate()
          .then(function(err) {
            expect(err).to.exist
            expect(err.message).to.equal('string violation: bio cannot be an array or an object')
          })
      })
    })
  })
})
