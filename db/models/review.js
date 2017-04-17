'use strict'

const {TEXT, FLOAT} = require('sequelize')

module.exports = db => db.define('reviews', {
  rating: {
    type: FLOAT
  },
  comment: {
    type: TEXT
  }
})
