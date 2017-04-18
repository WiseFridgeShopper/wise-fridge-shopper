'use strict'

const {STRING, TEXT} = require('sequelize')

module.exports = db => db.define('speakers', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true
    }
  },
  bio: {
    type: TEXT,
    allowNull: true
  }
})

module.exports.associations = (Speaker, {Magnet}) => {
  Speaker.hasMany(Magnet)
}