'use strict'

const {TEXT, FLOAT} = require('sequelize')

module.exports = db => db.define('reviews', {
  rating: {
    type: FLOAT,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  },
  comment: {
    type: TEXT
  }
})

module.exports.associations = (Review, {Magnet, User}) => {
  Review.hasOne(User)
  Review.hasOne(Magnet)
}
