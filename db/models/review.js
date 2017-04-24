'use strict'

const {TEXT, FLOAT} = require('sequelize')

module.exports = db => db.define('reviews', {
  rating: {
    type: FLOAT,
    allowNull: false
  },
  comment: {
    type: TEXT,
    allowNull: true
  }
})

module.exports.associations = (Review, {Magnet, User}) => {
  Review.belongsTo(User)
  Review.belongsTo(Magnet)
}
